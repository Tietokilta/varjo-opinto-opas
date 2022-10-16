import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../lib/database'

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const id = request.query.id

  if (request.method === 'GET') {
    const database = db()
    const data = await database.getCourseInfo(Array.isArray(id) ? id[0] : id || '', 'fi')
    await database.commit()
    response.send(data)
  }
}
