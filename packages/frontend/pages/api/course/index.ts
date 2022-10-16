import type { NextApiRequest, NextApiResponse } from 'next'
import { courseBasics } from '../../../types/types'
import Knex from 'knex'
import knexConfig from '../../../knexfile'
const knex = Knex(knexConfig.development)

const fetchCoursesFromDB = async () => {
  return await knex('course').select()
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method === 'GET') {
    const { searchTerm, selectedPeriod, selectedCredits } = request.query

    if (!(searchTerm || selectedPeriod || selectedCredits)) {
      return response.status(400).json({ error: 'No params specified!' })
    }
    const data = await fetchCoursesFromDB()

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
