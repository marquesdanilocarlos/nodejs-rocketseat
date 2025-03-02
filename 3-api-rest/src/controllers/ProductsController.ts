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
            name: z.string({required_error: "Nome é obrigatório."})
                .trim()
                .min(6, {message: "O nome deve ter no mínimo 6 caracteres."}),
            price: z.number({required_error: "Preço é obrigatório."})
                .positive({message: "O preço deve ser positivo."})
                .gte(10, {message: "O preço deve ser maior ou igual a R$ 10,00."}),
            description: z.string().nullish()
        });

        const {name, price} = bodySchema.parse(request.body);

        response.status(201).json({name, price});
    }
}