import {Knex} from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("courses").insert([
        {name: "HTML"},
        {name: "Javascript"},
        {name: "React"},
        {name: "NodeJs"},
        {name: "PHP"},
    ]);
}
