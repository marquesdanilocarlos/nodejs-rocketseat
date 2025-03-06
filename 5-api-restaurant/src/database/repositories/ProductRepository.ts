import knexInstance from "@/database/knex";

export default class ProductRepository {
    constructor() {
    }

    async getById(id: number) {
        return knexInstance<ProductType>('products')
            .select('id')
            .where('id', id)
            .first();
    }
}