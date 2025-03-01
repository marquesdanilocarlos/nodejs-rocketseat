import fs from 'node:fs/promises';

const DATABASE_PATH = new URL('db.json', import.meta.url);

export default class Database {
    #database = {};

    constructor() {
        fs.readFile(DATABASE_PATH, 'utf8').then(
            data => {
                this.#database = JSON.parse(data);
            }
        ).catch(
            () => {
                this.#persist();
            }
        );
    }

    #persist() {
        fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database));
    }

    insert(table, data) {

        if (!Array.isArray(this.#database[table])) {
            this.#database[table] = [];
        }

        this.#database[table].push(data);
        this.#persist();
    }

    select(table, filters) {
        let data = this.#database[table] ?? [];

        if (!filters) {
            return data;
        }

        return data.filter(row => {
            return Object.entries(filters)
                .some(
                    ([key, value]) => row[key.toLowerCase()] === value.toLowerCase()
                );

        });
    }
}