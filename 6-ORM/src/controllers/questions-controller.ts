import { Request, Response } from "express"

class QuestionsController {
  async index(request: Request, response: Response) {
    return response.status(500).json({message:"Oi"})
  }

  async create(request: Request, response: Response) {
    return response.status(201).json()
  }

  async update(request: Request, response: Response) {
    return response.json()
  }

  async remove(request: Request, response: Response) {
    return response.json()
  }
}

export { QuestionsController }
