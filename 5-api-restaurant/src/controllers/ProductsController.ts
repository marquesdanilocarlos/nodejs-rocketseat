import {NextFunction, Request, Response} from 'express';
import {CatchError} from "@/decorators/CatchError";
import bodySchema from "@/validators/productValidator";
import knexInstance from "@/database/knex";


export default class ProductsController {
    @CatchError()
    public async index(req: Request, res: Response, next: NextFunction): Promise<any> {

        const {name} = req.query;

        const products = await knexInstance<ProductRepository[]>('products')
            .select()
            .orderBy('name')
            .where('name', 'like', `%${name ?? ''}%`);

        return res.json(products);
    }

    @CatchError()
    public async create(req: Request, res: Response, next: NextFunction): Promise<any> {
        const {name, price} = bodySchema.parse(req.body);

        await knexInstance<ProductRepository>('products').insert({name, price});

        return res.status(201).json();
    }
}