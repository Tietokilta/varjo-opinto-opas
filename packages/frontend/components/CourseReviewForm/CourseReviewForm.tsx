import RatingRange from './Ranges/RatingRange/RatingRange'
import WorkloadRange from './Ranges/WorkloadRange/WorkloadRange'
import Button from './Button'
import { ChangeEventHandler, useState } from 'react'

const CourseReviewForm = () => {
  const [text, setText] = useState<string>('')
  const [rating, setRating] = useState<number | undefined>(undefined)
  const [workload, setWorkload] = useState<number | undefined>(undefined)

  return (
    <div>
      <h2 className="text-2xl font-bold">What's your take?</h2>
      <div className="mt-4 flex gap-4">
        <RatingRange label="Rating" value={rating} setValue={setRating} />
        <WorkloadRange
          label="Workload"
          value={workload}
          setValue={setWorkload}
        />
        <textarea
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          placeholder="I think the course was..."
          value={text}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
            setText(event.target.value)
          }}
        />
        <Button
          text="Send"
          active={rating != undefined && workload != undefined}
          onClick={() => console.log('Sent.')}
        />
      </div>
    </div>
  )
}

export default CourseReviewForm
