import { review } from '../types/types'

const ReviewCard = ({ courseTaken, rating, workload, text }: review) => {
  return (
    <div className="flex flex-shrink flex-grow items-center justify-between gap-10 rounded-lg border border-gray-100 bg-white py-2 px-4 drop-shadow-sm">
      <p>{text}</p>
      <div className="flex gap-4">
        <div className="flex flex-col items-center justify-center">
          <p className="text-md inline-flex font-bold">{rating}</p>
          <h3 className="text-sm">Rating</h3>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-md inline-flex font-bold">{workload}</p>
          <h3 className="text-sm">Workload</h3>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
