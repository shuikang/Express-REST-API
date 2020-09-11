import Knex from 'knex'
import * as faker from 'faker'

import { TABLE_NAME } from '../migrations/20200911194211_users'

export const seed = (knex: Knex): Promise<any> => {
  // Deletes ALL existing entries
  return knex(TABLE_NAME)
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('table_name').insert([
        { username: 'test', password: 'test', name: faker.name.findName() },
      ])
    })
}
