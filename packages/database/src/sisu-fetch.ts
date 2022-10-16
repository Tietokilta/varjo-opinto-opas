import Knex from 'knex'
import axios from 'axios'
import knexConfig from '../knexfile'

const knex = Knex(knexConfig.development);

type Translation = {
    translation: string,
    course_code: string,
    name: string,
    grade_scale: string,
    prerequisites: string,
    learning_results: string,
    content: string,
    grading_information: string,
    additional_information: string
}

type Course = {
    base: {
        course_code: string
        credits_max: number
        credits_min: number
        language: string
        period: string
    },

    translations: Translation[]
}

// Parameters
const languages = ['fi', 'sv', 'en']
const courseTypes :string[] = [
    'independent-work-essay',
    'independen-work-learning-diary',
    'independent-work-presentation',
    'independent-work-project',
    'licensiate-thesis',
    'teaching-participation.field-course',
    'teaching-participation-lab',
    'teaching-participation-lectures',
    'teaching-participation-online',
    'teaching-participation-project',
    'teaching-participation-seminar',
    'teaching-participation-small-group',
    'thesis-bachelor',
    'thesis-masters',
    'training-training'
]

const putCourseToDb = async (course: Course): Promise<void> => {
    await knex('course').insert(course.base)
    course.translations.forEach((translation) => {
        knex('translation').insert(translation)
    })
}

function check(course: any): boolean {
    return courseTypes.includes(course.type)
}

function format(sisuCourse: any): Course{
    const course: Course = {
        base: {
            course_code: sisuCourse.code,
            credits_max: sisuCourse.credits.max,
            credits_min: sisuCourse.credits.min,
            language: sisuCourse.summary.languageOfInstruction.en,
            period: sisuCourse.summary.teachingPeriod.en,
        },
        translations: []
    }

    languages.forEach((language)=>{
        course.translations.push(
            {
                translation: language,
                course_code: sisuCourse.code,
                name: sisuCourse.name[language],
                grade_scale: sisuCourse.summary.gradingScale[language],
                prerequisites: sisuCourse.summary.prerequisites[language],
                learning_results: sisuCourse.summary.learningOutcomes[language],
                content: sisuCourse.summary.content[language],
                grading_information: sisuCourse.summary.assesmentMethods[language],
                additional_information: sisuCourse.summary.additionalInformation[language]
            }
        )
    })

    return course
}

async function getData(): Promise<void> { 
    const { data } = await axios.get(
        `https://course.api.aalto.fi:443/api/sisu/v1/courseunitrealisations?USER_KEY=db42a46ce07036a8ce0040a30001d002`,
    )

    const cleanData = data.filter(check)

    const courses: Course[] = cleanData.map(format)
    
    const insertedCourseCodes: string[] = []

    courses.forEach((course)=>{
        if(!(insertedCourseCodes.includes(course.base.course_code))){
            insertedCourseCodes.push(course.base.course_code)
            putCourseToDb(course)
        }
    })

    console.log('Sisu fetch done!')
}

knex('course').count().then((data) =>{
        if (data[0].count === '0'){
            console.log('Start Sisu data fetched.')
            getData()
        } else {
            console.log('Sisu data already fetched.')
        }
    }
)
