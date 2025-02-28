export class Database {
    database = {};

    insert(table, data) {
        if (!Array.isArray(this.database[table])) {
            this.database[table] = [data];
            return;
        }

        this.database[table].push(data);
    }

    select(table) {
        return this.database[table];
    }
}