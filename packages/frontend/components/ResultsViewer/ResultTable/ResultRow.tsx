import { courseBasics } from '../../../types/types'
import { useRouter } from 'next/router'

const ResultRow = ({ result }: { result: courseBasics }) => {
  const router = useRouter()
  return (
    <tr
      className="border-b transition-all hover:scale-[1.03] hover:bg-white hover:shadow-lg"
      onClick={() => router.push('/course/' + result.code)}
    >
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
