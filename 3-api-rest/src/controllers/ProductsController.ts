/**
 * Métodos possíveis:
 * index - GET para listar vários registros
 * show - GET para exibir dados de um registro
 * create - POST para criar um registro
 * update - PUT para atualizar um registro
 * remove - DELETE para deletar um registro
 */
import {Request, Response} from 'express';

export default class ProductsController {
    index(request: Request, response: Response) {
        const {page, limit} = request.query;
        response.send(`Página ${page} com limit ${limit}`);
    }
    
    create(request: Request, response: Response) {
        const {name, price} = request.body;
        const requestId = request.user_id;
        //response.send(`Produto ${name} custa ${price}`);
        response.status(201).json({name, price, requestId});
    }
}