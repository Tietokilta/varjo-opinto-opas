import { useState, useEffect } from 'react'
import { creditOption, periodOption, courseBasics } from '../../types/types'
import LoadingSpinner from '../Util/LoadingSpinner'
import ResultTable from './ResultTable'
import { searchCourses } from '../../services/courses'

interface ResultsViewerProps {
  searchTerm: string
  selectedPeriod: periodOption
  selectedCredits: creditOption
}

const ResultsViewer = ({
  searchTerm,
  selectedPeriod,
  selectedCredits,
}: ResultsViewerProps) => {
  const [results, setResults] = useState<courseBasics[] | [] | undefined>(
    undefined
  )

  const updateListing = async () => {
    const courses = await searchCourses(
      'fi',
      searchTerm,
      selectedPeriod,
      selectedCredits
    )
    setResults(courses)
  }

  useEffect(() => {
    setResults(undefined)
    const updateTimeout = setTimeout(() => updateListing(), 1000)
    return () => clearTimeout(updateTimeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, selectedCredits, selectedPeriod])

  return (
    <div className="flex h-full w-10/12 flex-col items-center gap-4">
      {results ? ( // Has backend returned the results?
        results.length > 0 ? ( // Was there any results?
          <ResultTable results={results} />
        ) : (
          <div className="flex flex-col items-center gap-4">
            <p className="text-6xl">😢</p>
            <p className="font-bold text-gray-400">(Looks kinda empty)</p>
          </div>
        )
      ) : (
        <div className="flex flex-col items-center gap-6 font-bold">
          <LoadingSpinner />
          <p className="animate-bounce">Hang tight! </p>
        </div>
      )}
    </div>
  )
}

export default ResultsViewer
