import { Request, Response } from "express"
import {AppError} from "@/errorHandler";

class UsersController {
  async index(request: Request, response: Response) {
    return response.json({message: 'caralho'})
  }

  async create(request: Request, response: Response) {
    return response.status(201).json()
  }

  async show(request: Request, response: Response) {
    return response.json()
  }
}

export { UsersController }
