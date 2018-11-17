const knex = require('knex')({
    client: 'postgresql',
    connection: {
        database: 'fruit1',
        user: 'postgres',
        password: 'postgres'
    }
})



knex.transaction(async (trx) => {
    let query = knex.select('quantity').from('stock');

    query.then((rows) => {
        console.log(rows)
    })
        .catch((err) => {
            console.log(err)
        })



    await trx('stock').increment('quantity', 20).where('citrus_id', 1)

    let query1 = knex.select('quantity').from('stock');

    query1.then((rows) => {
        console.log(rows)
    })
        .catch((err) => {
            console.log(err)
        })

});

