import { Model } from 'objection'

export default class Course extends Model {
  course_code!: string;

  credits_max!: string;

  credits_min!: string;

  language!: string;

  period!: string;

  last_updated!: string;

  static get tableName(): string {
    return 'course';
  }
}
