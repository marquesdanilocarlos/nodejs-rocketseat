import { Request, Response, NextFunction } from "express";

export class AppError extends Error {
    statusCode: number;

    constructor(message: string, statusCode = 400) {
        super(message);
        this.statusCode = statusCode;
    }
}

// Middleware de tratamento de erro
export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {

    if (err instanceof AppError) {
        return res.status(err.statusCode).json({ error: err.message });
    }

    console.log(err);

    return res.status(500).json({ error: err.message });
}