import type { NextApiRequest, NextApiResponse } from 'next'
import { courseBasics } from '../../../types/types'
import Knex from 'knex'
import knexConfig from '../../../knexfile'
import { db } from '../../../lib/database'
const knex = Knex(knexConfig.development)

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

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method === 'GET') {
    const { searchTerm, selectedPeriod, selectedCredits } = request.query

    if (!(searchTerm || selectedPeriod || selectedCredits)) {
      return response.status(400).json({ error: 'No params specified!' })
    }

    const database = db();
    const data = await database.searchCourses('fi')
    await database.commit();

    response.status(200).json(
      data.map((course) => {
        return {
          name: 'Undefined',
          code: course.course_code,
          period: course.period,
          credits: course.credits_max,
          rating: '5',
          workload: '4.8',
        }
      })
    )
  } else {
    response.status(404)
  }
}
