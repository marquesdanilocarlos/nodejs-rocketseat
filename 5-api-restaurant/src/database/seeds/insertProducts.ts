import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("products").del();

    await knex("products").insert([
        {name: "Pizza", price: 10.00},
        {name: "Hamburguer", price: 15.00},
        {name: "Pudim", price: 20.00},
        {name: "Batata Frita", price: 15.00},
        {name: "Coxinha", price: 15.00},
    ]);
}
