import {NextFunction, Request, Response} from 'express';
import {CatchError} from "@/decorators/CatchError";
import bodySchema, {idValidator} from "@/validators/productValidator";
import knexInstance from "@/database/knex";
import ProductRepository from "@/database/repositories/ProductRepository";
import AppError from "@/errors/AppError";


export default class ProductsController {
    @CatchError()
    public async index(req: Request, res: Response, next: NextFunction): Promise<any> {

        const {name} = req.query;

        const products = await knexInstance<ProductType[]>('products')
            .select()
            .orderBy('name')
            .where('name', 'like', `%${name ?? ''}%`);

        return res.json(products);
    }

    @CatchError()
    public async create(req: Request, res: Response, next: NextFunction): Promise<any> {
        const {name, price} = bodySchema.parse(req.body);

        await knexInstance<ProductType>('products').insert({name, price});

        return res.status(201).json();
    }

    @CatchError()
    public async update(req: Request, res: Response, next: NextFunction): Promise<any> {
        const id = idValidator.parse(req.params.id);
        const product = await (new ProductRepository()).getById(id);

        if (!product) {
            throw new AppError('Produto não encontrado na base de dados.');
        }

        const {name, price} = bodySchema.parse(req.body);

        await knexInstance<ProductType>('products')
            .update({name, price, updated_at: knexInstance.fn.now()})
            .where('id', id);

        return res.json();
    }

    @CatchError()
    public async remove(req: Request, res: Response, next: NextFunction): Promise<any> {
        const id = idValidator.parse(req.params.id);
        const product = await (new ProductRepository()).getById(id);

        if (!product) {
            throw new AppError('Produto não encontrado na base de dados.');
        }

        await knexInstance<ProductType>('products').delete().where('id', id);

        return res.json();
    }


}