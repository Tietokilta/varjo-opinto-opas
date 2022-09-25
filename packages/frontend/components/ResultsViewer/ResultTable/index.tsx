import { courseBasics } from '../../../types/types'
import ResultRow from './ResultRow'

const ResultTable = ({ results }: { results: courseBasics[] }) => {
  return (
    <table className="w-full text-lg">
      <thead className="bg-gray-200 uppercase text-gray-700">
        <tr className="text-left">
          <th className="py-2 px-4">Name</th>
          <th className="py-2 px-4">Code</th>
          <th className="py-2 px-4 text-center">Period</th>
          <th className="py-2 px-4 text-center">Credits</th>
          <th className="py-2 px-4 text-center">Rating</th>
          <th className="py-2 px-4 text-center">Workload</th>
        </tr>
      </thead>
      <tbody className="hover:cursor-pointer">
        {results.map((result) => (
          <ResultRow key={result.code} result={result} />
        ))}
      </tbody>
    </table>
  )
}

export default ResultTable
