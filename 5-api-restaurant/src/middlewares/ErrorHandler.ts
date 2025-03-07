import {Request, Response, NextFunction} from 'express';
import AppError from '@/errors/AppError';
import {ZodError} from 'zod';

export default function errorHandler(error: Error, req: Request, res: Response, next: NextFunction): Response {

    console.log(Object.getPrototypeOf(error));

    if (error instanceof AppError) {
        return res.status(error.statusCode).json({message: error.message});
    }

    if (error instanceof ZodError) {
        return res.status(400).json({message: 'Erro de validação', issues: error.format()});
    }

    return res.status(500).json({message: error.message});
}