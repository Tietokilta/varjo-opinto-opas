import { Dispatch, SetStateAction } from 'react'
import StarButton from './StarButton'

const RatingRange = ({
  label,
  value,
  setValue,
}: {
  label: string
  value: number | undefined
  setValue: Dispatch<SetStateAction<number | undefined>>
}) => {
  // TODO: Possibly refactor buttons/stars to components
  return (
    <div>
      <label className="font-bold">{label}</label>
      <div className="flex">
        <StarButton
          representativeValue={1}
          realValue={value}
          setValue={setValue}
        />
        <StarButton
          representativeValue={2}
          realValue={value}
          setValue={setValue}
        />
        <StarButton
          representativeValue={3}
          realValue={value}
          setValue={setValue}
        />
        <StarButton
          representativeValue={4}
          realValue={value}
          setValue={setValue}
        />
        <StarButton
          representativeValue={5}
          realValue={value}
          setValue={setValue}
        />
      </div>
    </div>
  )
}

export default RatingRange
