import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const id = request.query.id

  if (request.method === 'GET') {
    console.log('Would return courseFull info: ', id)
    response.send('Would return full info for course ' + id)
  }
}
