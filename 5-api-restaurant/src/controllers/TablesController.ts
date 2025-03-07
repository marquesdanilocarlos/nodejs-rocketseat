import {Request, Response, NextFunction} from 'express';
import knexInstance from "@/database/knex";
import {CatchError} from "@/decorators/CatchError";

export default class TablesController {
    @CatchError()
    async index(req: Request, res: Response, next: NextFunction): Promise<any> {
        const tables: TableType[] = await knexInstance<TableType>('tables').select().orderBy('number');

        return res.json({tables});
    }
}