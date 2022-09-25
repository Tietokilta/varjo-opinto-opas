export type periodOption = 'I' | 'II' | 'III' | 'IV' | 'V' | '🏖' | undefined
export type creditOption = '1' | '2' | '3' | '4' | '5' | '6' | '≥7' | undefined
export interface courseBasics {
  name: string
  code: string
  period: Exclude<periodOption, undefined>
  credits: string
  rating: string
  workload: string
}

export interface courseDetailed extends courseBasics {
  gradeScale: string
  prerequisites: string
  learningResults: string
  content: string
  grading: string
  additionalInfo: string
}

export interface review {
  courseTaken: string
  rating: string
  workload: string
  text: string
}

export interface courseFull extends courseDetailed {
  reviews: review[]
}
