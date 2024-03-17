export default {
    schema: './src/db/schema.js',
    out: './drizzle',
    driver: 'pg',
    dbCredentials: {
        host: '127.0.0.1',
        port: 5432,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE,
    },
};