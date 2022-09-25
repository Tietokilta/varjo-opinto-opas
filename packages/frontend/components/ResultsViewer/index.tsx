import { useState, useEffect } from 'react'
import { creditOption, periodOption, courseBasics } from '../../types/types'
import LoadingSpinner from '../Util/LoadingSpinner'
import ResultTable from './ResultTable'

const courseMockData: courseBasics[] = [
  {
    name: 'Data Structures And Algorithms',
    code: 'CS-A1140',
    period: 'I',
    credits: '5',
    rating: '4.7',
    workload: '4.9',
  },
  {
    name: 'Tuotantotalous 1',
    code: 'TU-5014',
    period: 'II',
    credits: '5',
    rating: '5',
    workload: '1',
  },
  {
    name: 'Tuotantotalous 2',
    code: 'TU-5015',
    period: 'II',
    credits: '5',
    rating: '5',
    workload: '1',
  },
]

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
  useEffect(() => {
    setResults(undefined)
    setTimeout(() => {
      console.log('Fetching with filters:')
      console.log({ searchTerm, selectedPeriod, selectedCredits })
      setResults(courseMockData)
    }, 1000)
  }, [searchTerm, selectedPeriod, selectedCredits])

  const [results, setResults] = useState<courseBasics[] | [] | undefined>(
    courseMockData
  )

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
