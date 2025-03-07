import { Request, Response, NextFunction } from 'express';
import {CatchError} from "@/decorators/CatchError";
import bodySchema from "@/validators/orderValidator";

export default class OrdersController {
    @CatchError()
    async create(req: Request, res: Response, next: NextFunction): Promise<any> {

        const {table_session_id, product_id, quantity} = bodySchema.parse(req.body);

        return res.status(201).json({table_session_id, product_id, quantity});

    }
}