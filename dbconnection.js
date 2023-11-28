const knex = require('knex');

const db = knex({
    client: 'mysql2',
    connection: {
        host: 'mysql', 
        user: 'user_biblioteca',
        password: '12345',
        database: 'biblioteca'
    }
});

module.exports = db;