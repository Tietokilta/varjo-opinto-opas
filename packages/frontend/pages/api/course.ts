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
  if (request.method === 'GET') {
    const { text, period, credits } = request.query

    if (!(text || period || credits)) {
      return response.status(400).json({ error: 'No params specified!' })
    }

    // TODO: Remove
    console.log('Text: ', text)
    console.log('Period: ', period)
    console.log('Credits: ', credits)
    response.status(200).json(courseMockData)
  } else {
    response.status(404)
  }
}
