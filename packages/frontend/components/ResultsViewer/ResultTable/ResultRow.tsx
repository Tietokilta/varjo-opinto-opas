import { courseBasics } from '../../../types/types'

const ResultRow = ({ result }: { result: courseBasics }) => {
  return (
    <tr className="border-b transition-all hover:scale-[1.03] hover:bg-white hover:shadow-lg">
      <th className="py-2 px-4 text-left">{result.name}</th>
      <td className="py-2 px-4">{result.code}</td>
      <td className="py-2 px-4 text-center">{result.period}</td>
      <td className="py-2 px-4 text-center">{result.credits}</td>
      <td className="py-2 px-4 text-center">{result.rating}</td>
      <td className="py-2 px-4 text-center">{result.workload}</td>
    </tr>
  )
}

export default ResultRow
