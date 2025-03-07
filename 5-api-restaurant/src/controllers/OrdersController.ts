import { Request, Response, NextFunction } from 'express';
import {CatchError} from "@/decorators/CatchError";
import bodySchema from "@/validators/orderValidator";
import knexInstance from "@/database/knex";
import AppError from "@/errors/AppError";

export default class OrdersController {
    @CatchError()
    async create(req: Request, res: Response, next: NextFunction): Promise<any> {

        const {table_session_id, product_id, quantity} = bodySchema.parse(req.body);

        const session = await knexInstance<TableSessionType>('tables_sessions')
            .where({id: table_session_id})
            .whereNull('closed_at')
            .first();

        if (!session) {
            throw new AppError('Sessão não encontrada.');
        }

        const product = await knexInstance<ProductType>('products').where({id: product_id}).first();

        if (!product) {
            throw new AppError('Este produto não existe.');
        }

        return res.status(201).json({table_session_id, product_id, quantity});

    }
}