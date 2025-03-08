import { Request, Response } from "express"
import prisma from "@/prisma";

class QuestionsController {
  async index(request: Request, response: Response) {
    const questions = await prisma.question.findMany();
    return response.json(questions);
  }

  async create(request: Request, response: Response) {
    const {title, content, userId} = request.body;

    await prisma.question.create({data: {title, content, userId}});

    return response.status(201).json();
  }

  async update(request: Request, response: Response) {
    return response.json()
  }

  async remove(request: Request, response: Response) {
    return response.json()
  }
}

export { QuestionsController }
