import {Request, Response} from "express";

export default class DeliveriesController {
    async create(request: Request, response: Response): Promise<any> {
        return response.json('Criar entrega');
    }
}