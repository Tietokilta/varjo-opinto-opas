import type { NextApiRequest, NextApiResponse } from 'next'

const mockCourseData = {
  name: 'Tuotantotalous 1',
  code: 'TU-001',
  period: '3-5',
  credits: '5',
  rating: '4.9',
  workload: '3.9',
  description:
    'Kurssin suoritettuaan opiskelijalla on paremmat valmiudet ymmärtää ja arvioida liiketoimintamahdollisuuksia, suunnitella ja arvioida liiketoimintaprosesseja ja analysoida yrityksen taloudellista tilaa. Tavoitteena on myös oppia yleisiä insinöörityön valmiuksia projektin suunnitteluun, organisointiin ja hallintaan',
  learningGoals:
    'Kurssin suoritettuaan opiskelijalla on paremmat valmiudet ymmärtää ja arvioida liiketoimintamahdollisuuksia, suunnitella ja arvioida liiketoimintaprosesseja ja analysoida yrityksen taloudellista tilaa. Tavoitteena on myös oppia yleisiä insinöörityön valmiuksia projektin suunnitteluun, organisointiin ja hallintaan',
  reviews: [
    { text: 'Ihan hyvä kurssi', rating: '4', workload: '3' },
    { text: 'En tykännyt kyllä ollenkaan', rating: '2', workload: '4' },
    { text: 'En sano juuta enkä jaata', rating: '3', workload: '3' },
  ],
}

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const id = request.query.id

  if (request.method === 'GET') {
    response.status(200).json({ mockCourseData })
  }
}
