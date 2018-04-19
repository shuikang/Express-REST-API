const faker = require('faker')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('texts').del()
    .then(function () {
      // Inserts seed entries
      return knex('texts').insert([
        {text: faker.lorem.sentence()},
        {text: faker.lorem.sentence()},
        {text: faker.lorem.sentence()}
      ])
    })
}
