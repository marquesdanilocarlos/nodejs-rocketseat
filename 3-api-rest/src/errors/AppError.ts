import {NextFunction, Request, Response} from "express";
import {ZodError} from "zod";

export default class AppError extends Error{
    message: string;
    statusCode: number;

    constructor(message: string = 'Erro interno do servidor.', statusCode: number = 400) {
        super();
        this.message = message;
        this.statusCode = statusCode;
    }

    static exceptionHandler(error: Error, request: Request, response: Response, next: NextFunction): void {

        if (error instanceof AppError) {
            response.status(error.statusCode).json({message: error.message});
            return;
        }

        if (error instanceof ZodError) {
            response.status(400).json({message: 'Erro de validação.', isuues: error.format()});
            return;
        }

        response.status(500).json({message: error.message});
    }
}