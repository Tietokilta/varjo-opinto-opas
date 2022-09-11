import FilterButton from './FilterButton'
import { periodOption, creditOption } from '../../../types/types'

const FilterGroup = ({
  label,
  options,
  selected,
  setSelected,
}: {
  label: string
  options: periodOption[] | creditOption[]
  selected: periodOption | creditOption
  // Using JS method instead of (arrow) function. Trick to get around typing issue. May cause type safety issues.
  // TODO: Refactor with better time.
  setSelected(option: periodOption | creditOption): void
}) => {
  const handleFilterChange = (option: periodOption | creditOption): void => {
    if (option === selected) {
      setSelected(undefined)
    } else {
      setSelected(option)
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <label className="block font-bold">{label}</label>
      <div className="flex gap-2">
        {options.map((option) => (
          <FilterButton
            label={option}
            key={option}
            active={option === selected}
            onClick={() => handleFilterChange(option)}
          />
        ))}
      </div>
    </div>
  )
}

export default FilterGroup
