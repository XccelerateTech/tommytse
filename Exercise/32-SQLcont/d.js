const pg = require('pg');
const fs = require('fs');
const csvReadableStream = require('csv-reader');

var inputStream = fs.createReadStream('transaction_record.csv', 'utf8');

var config = {
    user: 'admin',
    database: 'tommytks',
    password: 'test',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000,
}

var client = new pg.Client(config);

async function commands() {
    await client.connect();

    let rows = [];

    inputStream.pipe(CSVReadableStream({ parsedNumbers: true, parseBooleans: true, trim: true }))
        .on('data', async (row) => {
            rows.push(row);
        })
        .on('end', async (data) => {
            await client.query('BEGIN');
            try {
                for (let row of rows) {
                    let [action, name, quantity] = row;
                    if (action === 'SELL') {
                        let result = await client.query(`
                    SELECT quantity FROM stock INNER JOIN citrus on stock.citrus_id = citrus.id
                    WHERE citrus.name = $1 GROUP BY quantity;
                    `, [name]);
                        if (result.rows[0].quantity < quantity) {
                            throw new Error(`Not enough ${name} to sell!`);
                        }

                    }
                    if (action === 'BUY') {
                        let result = await client.query(`
                    UPDATE stock SET quantity = quantity + $1
                    FROM citrus
                    WHERE stock.citrus_id = citrus.id AND name = $2`, [quantity, name]);
                        console.log(`You have bought ${quantity} ${name}'s!`);
                    } else {
                        let result = await client.query(`
                    UPDATE stock SET quantity = quantity - $1
                    FROM citrus
                    WHERE stock.citrus_id = citrus.id AND name = $2`, [quantity, name]);
                        console.log(`${quantity} ${name} sold!`);
                    }
                }
                await client.query('COMMIT');
            } catch (e) {
                await client.query('ROLLBACK')
                console.log(e)

            }
        });

}

commands();