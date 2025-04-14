import {Request, Response} from "express";
import deliveriesValidator from "@/validators/deliveriesValidator";
import prisma from "@/database/prisma";

export default class DeliveriesController {
    async create(request: Request, response: Response): Promise<any> {
        const {userId, description} = deliveriesValidator.parse(request.body);

        await prisma.delivery.create({data: {userId, description}});

        return response.status(201).json();
    }
}