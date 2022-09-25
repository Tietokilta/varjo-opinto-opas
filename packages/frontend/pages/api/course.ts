import type { NextApiRequest, NextApiResponse } from 'next'
import { courseBasics } from '../../types/types'

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

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  console.log('request')
  if (request.method === 'GET') {
    const { searchTerm, selectedPeriod, selectedCredits } = request.query

    // TODO: Remove
    const term = searchTerm as string

    if (!(searchTerm || selectedPeriod || selectedCredits)) {
      return response.status(400).json({ error: 'No params specified!' })
    }

    // TODO: Remove
    console.log('Text: ', searchTerm)
    console.log('Period: ', selectedPeriod)
    console.log('Credits: ', selectedCredits)
    response
      .status(200)
      .json(
        courseMockData.filter((course) =>
          course.name.toLowerCase().includes(term.toLowerCase())
        )
      )
  } else {
    response.status(404)
  }
}
