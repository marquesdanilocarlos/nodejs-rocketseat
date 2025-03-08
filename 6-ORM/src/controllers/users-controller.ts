import { Request, Response } from "express"
import prisma from "@/prisma";

class UsersController {
  async index(request: Request, response: Response) {
    const users = await prisma.user.findMany();

    return response.json(users);
  }

  async create(request: Request, response: Response) {
    const {name, email} = request.body;

    await prisma.user.create({data: {name, email}});

    return response.status(201).json({name, email});
  }

  async show(request: Request, response: Response) {
    return response.json()
  }
}

export { UsersController }
