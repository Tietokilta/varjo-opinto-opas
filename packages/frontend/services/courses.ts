import axios from 'axios'
import { creditOption, periodOption } from '../types/types'

export const searchCourses = async (
  lang: string,
  searchTerm?: string,
  selectedPeriod?: periodOption,
  selectedCredits?: creditOption
) => {
  const { data } = await axios.get('/api/course', {
    params: { searchTerm, selectedPeriod, selectedCredits },
  })

  return data
}
