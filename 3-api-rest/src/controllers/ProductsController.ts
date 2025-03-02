/**
 * Métodos possíveis:
 * index - GET para listar vários registros
 * show - GET para exibir dados de um registro
 * create - POST para criar um registro
 * update - PUT para atualizar um registro
 * remove - DELETE para deletar um registro
 */
import {Request, Response} from 'express';
import AppError from "../errors/AppError";

export default class ProductsController {
    index(request: Request, response: Response) {
        const {page, limit} = request.query;
        response.send(`Página ${page} com limit ${limit}`);
    }
    
    create(request: Request, response: Response) {
        const {name, price} = request.body;

        if (!name || !price) {
            throw new AppError('Nome e preço do produto são obrigatórios.');
        }

        response.status(201).json({name, price});
    }
}