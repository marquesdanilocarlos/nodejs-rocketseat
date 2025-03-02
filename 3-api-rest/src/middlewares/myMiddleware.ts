import {Request, Response, NextFunction} from 'express';

export default function myMiddleware(request: Request, response: Response, next: NextFunction) {
    console.log('Passou pelo middleware!');
    return next();
}