exports.up = function(knex, Promise) {
  return knex.schema.createTable("bookings", table => {
    table.increment();
    table.date("date");
    table.string("remark");
    table.timestamps(false, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("bookings");
};
