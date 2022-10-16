import { GetServerSideProps, NextPage } from 'next'
import CourseReviewForm from '../../components/CourseReviewForm/CourseReviewForm'
import CourseStat from '../../components/CourseStat'
import CourseTextBlock from '../../components/CourseTextBlock'
import ReviewCard from '../../components/ReviewCard'
import { courseFull, review } from '../../types/types'

const CoursePage: NextPage<courseFull> = ({
  name,
  code,
  period,
  credits,
  rating,
  workload,
  content,
  learningResults,
  reviews,
}: courseFull) => {
  return (
    <div className="template-columns container mx-auto grid grid-cols-[1fr_1fr] grid-rows-[1fr_1fr] gap-8">
      <div>
        <p className="text-2xl text-gray-800">{code}</p>
        <h1 className="text-4xl font-bold text-gray-900">{name}</h1>
        <p className="text-gray-800">
          {credits} credits | period {period}
        </p>
      </div>
      <div className="flex gap-4 self-center justify-self-end">
        <CourseStat label="Rating" value={rating} />
        <CourseStat label="Workload" value={workload} />
      </div>
      <CourseTextBlock label="Description" text={content} />
      <CourseTextBlock label="Learning goals" text={learningResults} />
      <div className="col-span-full">
        <h2 className="mt-10 text-2xl font-bold">What others have said?</h2>
        <div className="mt-4 flex flex-wrap gap-4">
          {reviews.map((review: review) => (
            <ReviewCard
              key={review.text}
              rating={review.rating}
              workload={review.workload}
              text={review.text}
              courseTaken={review.courseTaken}
            />
          ))}
        </div>
      </div>
      <div className="col-span-full">
        <CourseReviewForm />
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query

  // TODO: Move URL path to ENV variable
  const res = await fetch('http://localhost:3000/api/course/' + id)

  const profileData = await res.json()
  return {
    props: { ...profileData },
  }
}

export default CoursePage
