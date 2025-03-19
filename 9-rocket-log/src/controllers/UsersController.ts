import {Request, Response} from "express";
import userValidator from "@/validators/userValidator";
import {hash} from "bcryptjs";

export default class UsersController {
    async create(request: Request, response: Response): Promise<any> {
        const {name, email, password} = userValidator.parse(request.body);
        const hashedPassword = await hash(password, 8);

        return response.json({name, email, hashedPassword});
    }
}