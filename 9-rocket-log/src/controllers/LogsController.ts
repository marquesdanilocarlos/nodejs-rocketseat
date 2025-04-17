import {Request, Response} from "express";
import logsValidator from "@/validators/logsValidator";
import prisma from "@/database/prisma";
import AppError from "@/error/AppError";

export default class LogsController {
    async create(request: Request, response: Response): Promise<any> {

        const {deliveryId, description} = logsValidator.parse(request.body);
        const delivery = await prisma.delivery.findUnique({where: {id: deliveryId}});

        if (!delivery) {
            throw new AppError('Pedido não encontrado', 404);
        }

        if (delivery.status === 'processing') {
            throw new AppError('Pedido ainda não enviado');
        }

        await prisma.deliveryLog.create({
            data: {
                deliveryId,
                description
            }
        });

        return response.status(201).json();
    }
}