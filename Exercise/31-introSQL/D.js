var pg = require('pg');

var config = {
    user: 'tommytks',
    database: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
}

var client = new pg.Client(config);

client.connect();
//query become a string
client.query('SELECT * FROM citrus WHERE color = $1',['orange'], function(err, results) {//tell pg the index via $
    if(err) {
        console.log(err);
    }
    console.log(results.rows);
})