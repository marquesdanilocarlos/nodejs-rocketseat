import {Request, Response} from "express";
export default class ProductsController {
    async index(request: Request, response: Response): Promise<any> {
        return response.json({message: 'Listagem de produtos'});
    }

    async create(request: Request, response: Response): Promise<any> {
        return response.status(201).json({message: request.user});
    }
}