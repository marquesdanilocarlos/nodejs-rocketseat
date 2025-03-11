import {Request, Response} from "express";
import AppError from "@/error/AppError";
import authConfig from "@/config/auth";
import {sign} from "jsonwebtoken"

export default class SessionsController {

    async create(request: Request, response: Response): Promise<any> {
        const {username, password} = request.body;

        const fakeUser = {
            id: 1,
            username: "danilo",
            password: "123456"

        };

        if (username !== fakeUser.username || password !== fakeUser.password) {
            throw new AppError("Usuário ou senha incorretos.", 401);
        }
        const {secret} = authConfig.jwt;
        const token = sign({}, secret, {
            expiresIn: authConfig.jwt.expiresIn,
            subject: String(fakeUser.id)
        });

        return response.status(201).json(token);
    }
}