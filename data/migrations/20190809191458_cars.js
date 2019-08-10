
exports.up = function(knex) {
  return knex.schema.createTable('cars', (tbl) => {
    tbl.increments('id').primary();
    tbl.string('name').notNullable();
    tbl.integer('year').notNullable();
    tbl.integer('mpg');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
