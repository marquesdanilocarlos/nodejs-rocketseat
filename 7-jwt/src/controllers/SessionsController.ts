import {Request, Response} from "express";
export default class SessionsController {

    async create(request: Request, response: Response): Promise<any> {
        return response.status(201).json();
    }
}