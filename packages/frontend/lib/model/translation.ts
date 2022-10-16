import { Model } from 'objection'

export default class Translation extends Model {
  course_code!: string;

  translation!: string;

  grade_scale!: string;

  prerequisites!: string;

  learning_results!: string;

  content!: string;

  grading_information!: string;

  additional_information!: string;

  last_updated!: string;

  static get tableName(): string {
    return 'course_translations';
  }
}
