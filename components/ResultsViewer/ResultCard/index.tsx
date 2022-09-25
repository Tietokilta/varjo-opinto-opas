import { courseBasics } from '../../../types/types'
import ResultCardStat from './ResultCardStat'

const ResultCard = ({ resultData }: { resultData: courseBasics }) => {
  return (
    <div className="flex w-full items-center justify-between rounded-3xl bg-white px-8 py-5 drop-shadow-xl">
      <div>
        <p>{resultData.code}</p>
        <h1 className="text-3xl font-bold">{resultData.name}</h1>
      </div>
      <div className="flex gap-10">
        <ResultCardStat label="Period" value={resultData.period} />
        <ResultCardStat label="Credits" value={resultData.credits} />
        <ResultCardStat label="Rating" value={resultData.rating} />
        <ResultCardStat label="Workload" value={resultData.workload} />
      </div>
    </div>
  )
}

export default ResultCard
