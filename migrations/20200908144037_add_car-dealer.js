
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments('id')
      tbl.string('make', 128).notNullable();
      tbl.string('VIN', 17).unique().notNullable();
      tbl.string('model', 128).notNullable();
      tbl.decimal('milage', 128).notNullable();
      tbl.string('transmissionType', 1000).notNullable();
      tbl.string('statusOfTitle', 128).notNullable();
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('cars')
  
};
