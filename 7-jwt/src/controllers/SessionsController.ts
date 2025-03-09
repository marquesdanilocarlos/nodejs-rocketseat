import {Request, Response} from "express";
export default class SessionsController {
    async index(request: Request, response: Response): Promise<any> {
        return response.json({message: 'Listagem de sessões'});
    }
}