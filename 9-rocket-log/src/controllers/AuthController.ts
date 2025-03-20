import {Request} from "express";

export default class AuthController {
    async login(request: Request, response: Response): Promise {
        return response.json({message: 'Login'});
    }
}