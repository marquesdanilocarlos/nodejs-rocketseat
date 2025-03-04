import {Request, Response, NextFunction} from 'express';
import AppError from "@/errors/AppError";

export default function errorHandler(error: Error, req: Request, res: Response, next: NextFunction):Response {

    if (error instanceof AppError) {
        return res.status(error.statusCode).json({message: error.message});
    }

    return res.status(500).json({message: 'Erro interno do servidor.'});
}