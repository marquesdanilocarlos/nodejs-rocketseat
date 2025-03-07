import {Request, Response} from 'express';
import {CatchError} from "@/decorators/CatchError";
import bodySchema, {idValidator} from "@/validators/orderValidator";
import knexInstance from "@/database/knex";
import AppError from "@/errors/AppError";

export default class OrdersController {
    @CatchError()
    async create(req: Request, res: Response): Promise<any> {

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

        await knexInstance<OrderType>('orders').insert({table_session_id, product_id, quantity, price: product.price});

        return res.status(201).json();

    }

    @CatchError()
    async index(req: Request, res: Response): Promise<any> {

        const tableSessionId: number = idValidator.parse(req.params.table_session_id);

        const orders: OrderType[] = await knexInstance<OrderType>('orders')
            .select(
                'orders.*',
                'products.name',
                knexInstance.raw('orders.price * orders.quantity as total')
            )
            .innerJoin('products', 'products.id', 'orders.product_id')
            .where({table_session_id: tableSessionId})
            .orderBy('orders.created_at', 'desc');

        return res.json({orders});
    }

    @CatchError()
    async show(req: Request, res: Response): Promise<any> {
        const tableSessionId: number = idValidator.parse(req.params.table_session_id);
        const order = await knexInstance<OrderType>('orders')
            .select(
                knexInstance.raw('COALESCE(SUM(orders.price * orders.quantity), 0) as total'),
                knexInstance.raw('COALESCE(SUM(orders.quantity), 0) as quantity'),
            )
            .where({table_session_id: tableSessionId});

        return res.json(order);
    }
}