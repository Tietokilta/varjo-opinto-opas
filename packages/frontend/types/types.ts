export type periodOption = 'I' | 'II' | 'III' | 'IV' | 'V' | '🏖' | undefined
export type creditOption = '1' | '2' | '3' | '4' | '5' | '6' | '≥7' | undefined
export type courseBasics = {
  name: string
  code: string
  period: Exclude<periodOption, undefined>
  credits: string
  rating: string
  workload: string
}
