exports.up = function(knex, Promise) {
    return knex.schema.createTable('texts', function (table) {
        table.increments('id')
        table.string('text')
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('texts')
}
