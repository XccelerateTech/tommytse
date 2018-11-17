const fs = require("fs");
const csvReadableStream = require("csv-reader");

const knex = require("knex")({
  client: "postgresql",
  connection: {
    database: "postgres",
    user: "tommytks",
    password: "postgres"
  }
});

const inputStream = fs.createReadStream(
  __dirname + "/transaction_record.csv",
  "utf8"
);

async function commands() {
  let rows = [];
  inputStream
    .pipe(
      csvReadableStream({ parsedNumber: true, parseBooleans: true, trim: true })
    )
    .on("data", async row => {
      rows.push(row);
    })
    .on("end", async data => {
      knex.transaction(async trx => {
        for (let row of rows) {
          let [action, name, quantity] = row;
          if (action === "SELL") {
            let rows = await trx
              .select("quantity")
              .from("stock")
              .innerJoin("citrus", "stock.citrus_id", "citrus.id")
              .where("citrus.name", name)
              .groupBy("quantity");
            if (rows[0].quantity < quantity) {
                
              throw new Error(`Not enough ${name} to sell!`);
            }
          }
          if (action === "BUY") {
            await trx("stock")
              .whereIn("citrus_id", function() {
                this.select("id")
                  .from("citrus")
                  .where("name", name);
              })
              .increment("quantity", quantity);
          } else {
            await trx("stock")
              .whereIn("citrus_id", function() {
                this.select("id")
                  .from("citrus")
                  .where("name", name);
              })
              .decrement("quantity", quantity);
          }
        }
      });
    });
}

commands();

process.on('exit', function(code){
    return console.log(`About to exit with code ${code}`)
})
