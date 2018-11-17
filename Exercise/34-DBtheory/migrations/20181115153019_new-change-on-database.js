exports.up = function(knex, Promise) {
  return knex.schema.table("accounts", table => {
    table.increments();
    table.string("name");
    table.string("email");
    table.string("HKID");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("accounts");
};
