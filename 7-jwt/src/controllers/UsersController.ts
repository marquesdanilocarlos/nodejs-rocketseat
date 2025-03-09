import {Request, Response} from "express";
import prisma from "@/prisma";
import AppError from "@/error/AppError";
export default class UsersController {
    async index(request: Request, response: Response): Promise<any> {
        const users = await prisma.user.findMany();
        return response.json(users);
    }
}