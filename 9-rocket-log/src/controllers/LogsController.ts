import {Request, Response} from "express";

export default class LogsController {
    async create(request: Request, response: Response): Promise<any> {
        return response.json({message: 'Rota de logs'})
    }
}