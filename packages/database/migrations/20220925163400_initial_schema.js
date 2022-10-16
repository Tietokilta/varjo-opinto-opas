exports.up = (knex) => knex.schema
      .createTable('course', (table) => {
        table.string('course_code').unique()
        table.integer('credits_max')
        table.integer('credits_min')
        table.string('language')
        table.text('period')
        table.timestamp('updated_at').defaultTo(knex.fn.now())
      })
      .createTable('translation', (table) => {
        table.string('course_code')
        table.foreign('course_code').references('course.course_code')
        table.string('translation')
        table.text('name')
        table.string('grade_scale')
        table.text('prerequisites')
        table.text('learning_results')
        table.text('content')
        table.text('grading_information')
        table.text('additional_information')
        table.timestamp('updated_at').defaultTo(knex.fn.now())
      })
      .createTable('review', (table) => {
        table.increments()
        table.string('course_code')
        table.string('course_taken')
        table.integer('rating')
        table.integer('workload')
        table.string('review_lang')
        table.text('review')
        table.timestamp('updated_at').defaultTo(knex.fn.now())
      })

exports.down = () => {}