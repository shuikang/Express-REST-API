const faker = require('faker')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('texts').truncate()
    .then(function () {
      // Inserts seed entries
      let data = []
      for (let i = 0; i < 10; i++) {
        data.push({
          text: faker.lorem.sentence() 
        })
      }
      return knex('texts').insert(data)
    })
}
