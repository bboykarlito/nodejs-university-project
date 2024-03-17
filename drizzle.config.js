export default {
    schema: './src/db/schema.js',
    out: './drizzle',
    driver: 'pg',
    dbCredentials: {
        host: 'postgres',
        port: 5432,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE,
    },
};