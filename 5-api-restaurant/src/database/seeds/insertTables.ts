import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("tables").del();

    await knex("tables").insert([
        {number: 1},
        {number: 2},
        {number: 3},
        {number: 4},
        {number: 5},
        {number: 6},
        {number: 7},
        {number: 8},
        {number: 9},
        {number: 10},
    ]);
}