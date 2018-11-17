exports.up = function(knex, Promise) {
  return knex.schema.table("transactions", table => {
    table.integer("creditCards_number");
    table.foreign("creditCards_number").references("credit_cards.number");
    table.date("date_of_transaction");
    table.decimal("balance");
    table.string("details");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("transactions");
};
