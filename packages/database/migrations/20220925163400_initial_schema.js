exports.up = (knex) => {
    return knex.schema
      .createTable('course', (table) => {
        table.string('course_code')
        table.string('credits_max')
        table.string('credits_min')
        table.string('language')
        table.string('period')
        table.string('last_updated')
      })
      .createTable('course_translations', (table) => {
        table.string('course_code')
        table.string('translation')
        table.string('grade_scale')
        table.string('prerequisites')
        table.string('learning_results')
        table.string('content')
        table.string('grading_information')
        table.string('additional_information')
      })
  }
  
  exports.down = (knex) => {
    return knex.schema
      .dropTableIfExists('course')
      .dropTableIfExists('course_translations')
  }