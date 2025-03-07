import {Request, Response, NextFunction} from 'express';
import {CatchError} from "@/decorators/CatchError";
import bodySchema, {idValidator} from "@/validators/tableSessionValidator";
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

    @CatchError()
    async index(req: Request, res: Response, next: NextFunction): Promise<any> {
        const sessions: TableSessionType[] = await knexInstance<TableSessionType>('tables_sessions')
            .orderBy('closed_at');

        return res.json({sessions});
    }

    @CatchError()
    async close(req: Request, res: Response, next: NextFunction): Promise<any> {
        const id = idValidator.parse(req.params.id);
        const session = await knexInstance<TableSessionType>('tables_sessions')
            .where('id', id)
            .whereNull('closed_at')
            .first();

        if (!session) {
            throw new AppError('Sessão da mesa não encontrada.');
        }

        await knexInstance<TableSessionType>('tables_sessions').update({closed_at: knexInstance.fn.now()}).where('id', id);

        res.json();
    }
}