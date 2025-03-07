import {Request, Response, NextFunction} from 'express';
import {CatchError} from "@/decorators/CatchError";
import bodySchema from "@/validators/tableSessionValidator";
import knexInstance from "@/database/knex";
import AppError from "@/errors/AppError";

export default class TableSessionsController {
    @CatchError()
    async create(req: Request, res: Response, next: NextFunction): Promise<any> {

        const {table_id} = bodySchema.parse(req.body);

        const session: TableSessionType | undefined = await knexInstance<TableSessionType>('tables_sessions')
            .where({table_id})
            .whereNull('closed_at')
            .orderBy('opened_at', 'desc')
            .first();

        if (session) {
            throw new AppError('Essa mesa já está aberta.');
        }


        await knexInstance<TableSessionType>('tables_sessions').insert({table_id, opened_at: knexInstance.fn.now()});

        return res.status(201).json();
    }
}