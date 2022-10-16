import { NextPage, GetServerSideProps } from 'next'
import CourseStat from '../../components/CourseStat'
import { courseFull } from '../../types/types'

const CoursePage: NextPage<courseFull> = ({
  name,
  code,
  period,
  credits,
  rating,
  workload,
  content,
  learningResults,
}: courseFull) => {
  return (
    <div className="template-columns container mx-auto grid grid-cols-[1fr_1fr] grid-rows-[1fr_1fr]">
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
