import React, { useState } from 'react'
import type { NextPage } from 'next'
import SearchGadget from '../components/SearchGadget'
import { periodOption, creditOption } from '../types/types'
import ResultsViewer from '../components/ResultsViewer'

const Home: NextPage = () => {
  // Saved here for front page search interactivity. Possibly move to global state with better time.
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [selectedPeriod, setSelectedPeriod] = useState<periodOption>(undefined)
  const [selectedCredits, setSelectedCredits] =
    useState<creditOption>(undefined)

  const somethingSearched = searchTerm || selectedPeriod || selectedCredits

  return (
    <div className="container mx-auto h-full">
      {!somethingSearched ? (
        <div className="flex h-full flex-col items-center justify-center gap-20">
          <h1 className="text-center text-6xl font-extrabold text-gray-900">
            Welcome to <span className="text-blue-800">Varjo-opinto-opas</span>!
          </h1>
          <SearchGadget
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedPeriod={selectedPeriod}
            setSelectedPeriod={setSelectedPeriod}
            selectedCredits={selectedCredits}
            setSelectedCredits={setSelectedCredits}
            slim={false}
          />
        </div>
      ) : (
        <div className="my-8 grid min-h-full grid-cols-1 grid-rows-[auto_1fr] justify-center justify-items-center gap-8">
          <SearchGadget
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedPeriod={selectedPeriod}
            setSelectedPeriod={setSelectedPeriod}
            selectedCredits={selectedCredits}
            setSelectedCredits={setSelectedCredits}
            slim={true}
          />
          <ResultsViewer
            searchTerm={searchTerm}
            selectedPeriod={selectedPeriod}
            selectedCredits={selectedCredits}
          />
        </div>
      )}
    </div>
  )
}

export default Home
