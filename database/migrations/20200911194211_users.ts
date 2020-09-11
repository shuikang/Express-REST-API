import Knex from 'knex'

export const TABLE_NAME = 'users'

export const up = (knex: Knex): Promise<any> => {
  return knex.schema.createTable(TABLE_NAME, (table: Knex.TableBuilder) => {
    table.increments('id')
    table.string('username')
    table.string('password')
    table.string('name')
  })
}

export const down = (knex: Knex): Promise<any> => {
  return knex.schema.dropTable(TABLE_NAME)
}
