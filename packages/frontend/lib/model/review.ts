import { Model } from 'objection'

export default class Review extends Model {
  id!: number;

  course_code!: string;

  course_taken!: string;

  rating!: number;

  workload!: number;

  review_lang!: string;

  review!: string;

  static get tableName(): string {
    return 'review';
  }
}
