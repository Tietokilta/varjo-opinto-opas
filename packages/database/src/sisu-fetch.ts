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
    course.translations.forEach(async (translation) => {
        await knex('translation').insert(translation)
    })
}

const parseTeachingPeriod = (course: any): string => {
    const stratPeriodLimits = ['02-20', '04-15', '06-01', '09-01', '10-15']
    const endPeriodLimits = ['03-06', '05-01', '06-20', '09-14', '11-01']
    let startPeriod = 3
    let endPeriod = 3

    stratPeriodLimits.forEach((limit) => {
        if (limit < course.startDate.substring(5,)) { startPeriod += 1 }
    })

    endPeriodLimits.forEach((limit) => {
        if (limit < course.endDate.substring(5,)) { endPeriod += 1 }
    })

    startPeriod = ((startPeriod - 1) % 6) + 1
    endPeriod = ((endPeriod - 1) % 6) + 1

    if ( startPeriod === endPeriod) {
        return `${startPeriod}`
    } 
        return `${startPeriod}-${endPeriod}`
    
}

const check = (course: any): boolean => courseTypes.includes(course.type)

function format(sisuCourse: any): Course{
    const course: Course = {
        base: {
            course_code: sisuCourse.code,
            credits_max: sisuCourse.credits.max,
            credits_min: sisuCourse.credits.min,
            language: sisuCourse.summary.languageOfInstruction.en,
            period: parseTeachingPeriod(sisuCourse),
        },
        translations: []
    }

    languages.forEach((language) => {
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
        `https://course.api.aalto.fi:443/api/sisu/v1/courseunitrealisations?USER_KEY=${process.env.SISU_USER_KEY}`,
    )

    const cleanData = data.filter(check)

    const courses: Course[] = cleanData.map(format)
    
    const insertedCourseCodes: string[] = []

    courses.forEach((course) => {
        if(!(insertedCourseCodes.includes(course.base.course_code))){
            insertedCourseCodes.push(course.base.course_code)
            putCourseToDb(course)
        }
    })

    console.log('Sisu fetch done!')
}

knex('course').count().then((data) =>{
        if (data[0].count === '0'){
            console.log('Start Sisu data fetch.')
            getData()
        } else {
            console.log('Sisu data already fetched.')
        }
    }
)
