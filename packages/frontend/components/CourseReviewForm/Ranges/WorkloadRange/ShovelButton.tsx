import { Dispatch, SetStateAction } from 'react'

const ShovelButton = ({
  representativeValue,
  realValue,
  setValue,
}: {
  representativeValue: number
  realValue: number | undefined
  setValue: Dispatch<React.SetStateAction<number | undefined>>
}) => {
  return (
    <button onClick={() => setValue(representativeValue)}>
      <WorkloadShovel
        active={realValue != undefined && realValue >= representativeValue}
      />
    </button>
  )
}

const WorkloadShovel = ({ active }: { active: boolean }) => {
  return (
    <div>
      {active ? (
        <svg
          stroke="currentColor"
          fill="currentColor"
          className="h-7 w-7 text-red-400"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <desc></desc>
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M17 4l3 3"></path>
          <path d="M18.5 5.5l-8 8"></path>
          <path d="M8.276 11.284l4.44 4.44a0.968 .968 0 0 1 0 1.369l-2.704 2.704a4.108 4.108 0 0 1 -5.809 -5.81l2.704 -2.703a0.968 .968 0 0 1 1.37 0z"></path>
        </svg>
      ) : (
        <svg
          stroke="currentColor"
          fill="currentColor"
          className="h-7 w-7 text-gray-300"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <desc></desc>
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M17 4l3 3"></path>
          <path d="M18.5 5.5l-8 8"></path>
          <path d="M8.276 11.284l4.44 4.44a0.968 .968 0 0 1 0 1.369l-2.704 2.704a4.108 4.108 0 0 1 -5.809 -5.81l2.704 -2.703a0.968 .968 0 0 1 1.37 0z"></path>
        </svg>
      )}
    </div>
  )
}

export default ShovelButton
