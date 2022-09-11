import Searchbar from './Searchbar'
import { useState } from 'react'
import FilterGroup from './FilterGroup'
import { periodOption, creditOption } from '../../types/types'

const periodOptions: periodOption[] = ['I', 'II', 'III', 'IV', 'V', '🏖']
const creditOptions: creditOption[] = ['1', '2', '3', '4', '5', '6', '≥7']

const SearchGadget = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [selectedPeriod, setSelectedPeriod] = useState<periodOption>(undefined)
  const [selectedCredits, setSelectedCredits] =
    useState<creditOption>(undefined)

  const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(event.target.value)

  // Wrapper functions to get around typing issue with dispatch functions.
  // TODO: Refactor with better time
  const handlePeriodChange = (option: periodOption): void => {
    setSelectedPeriod(option)
  }

  const handleCreditsChange = (option: creditOption): void => {
    setSelectedCredits(option)
  }

  return (
    <div className="flex w-10/12 flex-col gap-8 rounded-3xl border border-gray-100 bg-white p-12 shadow-lg drop-shadow-xl">
      <Searchbar value={searchTerm} onChange={handleSearchTermChange} />
      <div className="flex flex-wrap justify-around gap-6 px-5">
        <FilterGroup
          label="Period"
          options={periodOptions}
          selected={selectedPeriod}
          setSelected={handlePeriodChange}
        />
        <FilterGroup
          label="Credits"
          options={creditOptions}
          selected={selectedCredits}
          setSelected={handleCreditsChange}
        />
      </div>
    </div>
  )
}

export default SearchGadget
