import * as fs from 'node:fs/promises';

const DATABASE_PATH = new URL('db.json', import.meta.url);

export class Database {
    #database = {};

    constructor() {

        fs.readFile(DATABASE_PATH, 'utf8').then((data) => {
            this.#database = JSON.parse(data);
        }).catch(() => {
            console.log('Não foi possível recuperar os dados do arquivo.')
        });

        this.#persist();
    }

    #persist() {
        fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database));
    }

    insert(table, data) {
        if (!Array.isArray(this.#database[table])) {
            this.#database[table] = [data];
            return;
        }

        this.#database[table].push(data);
        this.#persist();
    }

    select(table) {
        return this.#database[table] ?? [];
    }
}