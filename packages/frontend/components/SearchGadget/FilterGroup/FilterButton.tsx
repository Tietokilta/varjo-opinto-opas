import { creditOption, periodOption } from '../../../types/types'
import type { MouseEventHandler } from 'react'

const FilterButton = ({
  label,
  active,
  onClick,
}: {
  label: periodOption | creditOption
  active: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
}) => {
  return (
    <button
      className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all ${
        active
          ? 'border-blue-800 bg-blue-700 text-white'
          : 'bg-white hover:border-blue-700'
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default FilterButton
