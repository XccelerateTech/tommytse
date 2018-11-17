exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", table => {
    table.increment();
    table.string("username");
    table.string("password");
    table.boolean("active");
    table.timestamps(false, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users");
};
