import {NextFunction, Request, Response} from "express";
import AppError from "@/error/AppError";

export default function verifyUserAuthorization(roles: string[]) {

    return (req: Request, res: Response, next: NextFunction) => {
        const {user} = req

        if (!user || !roles.includes(user?.role)) {
            throw new AppError('Não autorizado', 401);
        }

        return next();
    }
}