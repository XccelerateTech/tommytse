exports.up = function(knex, Promise) {
  return knex.schema.createTable("credit_cards", table => {
    table.increments();
    table.integer('number').unique();
    table.date('expire_date');
    table.integer("accounts_id");
    table.foreign("accounts_id").references("accounts.id");

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("credit_cards");
};
