import {NextFunction, Request, Response} from "express";

export default class AppError extends Error {
    public statusCode: number;
    public message: string;

    constructor(message: string = '', statusCode: number = 500) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }

    public static errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
        console.error(err);
        if (err instanceof AppError) {
            return res.status(err.statusCode).json({error: err.message});
        }

        return res.status(500).json({error: err.message});
    }
}