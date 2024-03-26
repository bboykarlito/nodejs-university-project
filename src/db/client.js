const { drizzle } = require('drizzle-orm/node-postgres');
const { Client } = require('pg');

const schema = require('./schema');

const client = new Client({
    host: "postgres",
    port: 5432,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
});

client.connect();
module.exports = drizzle(client, { schema });
