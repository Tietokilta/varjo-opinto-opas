import knex from 'knex'
import { Model } from 'objection';
import { creditOption, periodOption, review } from '../types/types'
import Course from './model/course';
import Review from './model/review';
import { Knex } from 'knex'
import Transaction = Knex.Transaction

const pg = knex({  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: '1234',
    database: 'postgres'
  },
  searchPath: ['knex', 'public'],
});

Model.knex(pg)

class Database {
  private readonly trx?: Promise<Transaction>

  constructor() {
    this.trx = pg.transaction();
  }

  async searchCourses (
    lang: string,
    searchTerm?: string,
    selectedPeriod?: periodOption,
    selectedCredits?: creditOption
  ): Promise<Course[]> {
    return Course.query(await this.trx)
  }

  async getCourseInfo(
    course_code: string,
    lang: string
  ): Promise<Course | undefined> {
    return Course.query(await this.trx).where({ course_code }).first()
  }

  async postReview(
    review: review
  ): Promise<Review> {
    return Review.query(await this.trx).insertAndFetch(review as unknown as Review)
  }

  async commit() {
    const t = await this.trx;
    if (t) { (await t).commit(); }
  }

  async rollback() {
    const t = await this.trx;
    if (t) { (await t).rollback(); }
  }
}

export const db = () => new Database();
