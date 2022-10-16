import { Dispatch, SetStateAction } from 'react'
import ShovelButton from './ShovelButton'

const WorkloadRange = ({
  label,
  value,
  setValue,
}: {
  label: string
  value: number | undefined
  setValue: Dispatch<SetStateAction<number | undefined>>
}) => {
  // TODO: Possibly refactor buttons/shovels to components
  return (
    <div>
      <label className="font-bold">{label}</label>
      <div className="flex">
        <ShovelButton
          realValue={value}
          setValue={setValue}
          representativeValue={1}
        />
        <ShovelButton
          realValue={value}
          setValue={setValue}
          representativeValue={2}
        />
        <ShovelButton
          realValue={value}
          setValue={setValue}
          representativeValue={3}
        />
        <ShovelButton
          realValue={value}
          setValue={setValue}
          representativeValue={4}
        />
        <ShovelButton
          realValue={value}
          setValue={setValue}
          representativeValue={5}
        />
      </div>
    </div>
  )
}

export default WorkloadRange
