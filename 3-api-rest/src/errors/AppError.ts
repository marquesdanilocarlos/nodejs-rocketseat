import {NextFunction, Request, Response} from "express";

export default class AppError extends Error{
    message: string;
    statusCode: number;

    constructor(message: string = 'Erro interno do servidor.', statusCode: number = 400) {
        super();
        this.message = message;
        this.statusCode = statusCode;
    }

    static exceptionHandler(error: AppError, request: Request, response: Response, next: NextFunction): void {
        response.status(error.statusCode).json({message: error.message});
    }
}