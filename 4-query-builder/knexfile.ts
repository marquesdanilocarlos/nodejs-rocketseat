export default {
    client: 'sqlite3',
    connection: {
        filename: './src/database/database.db'
    },
    useNullAsDefault: true,
    migrations: {
        extension: 'ts',
        directory: './src/database/migrations'
    },
    seeds: {
        directory: './src/database/seeds'
    }
}