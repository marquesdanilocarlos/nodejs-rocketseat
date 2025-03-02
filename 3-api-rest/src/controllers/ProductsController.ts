/**
 * Métodos possíveis:
 * index - GET para listar vários registros
 * show - GET para exibir dados de um registro
 * create - POST para criar um registro
 * update - PUT para atualizar um registro
 * remove - DELETE para deletar um registro
 */
import {Request, Response} from 'express';
import {z, ZodObject, ZodRawShape, ZodError} from 'zod';

export default class ProductsController {
    index(request: Request, response: Response) {
        const {page, limit} = request.query;
        response.send(`Página ${page} com limit ${limit}`);
    }

    create(request: Request, response: Response) {
        const bodySchema: ZodObject<ZodRawShape> = z.object({
            name: z.string({required_error: "Nome é obrigatório."}),
            price: z.number({required_error: "Preço é obrigatório."}),
            description: z.string().nullish()
        });

        const {name, price} = bodySchema.parse(request.body);

        response.status(201).json({name, price});
    }
}