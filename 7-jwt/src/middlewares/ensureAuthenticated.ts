import {Request, Response, NextFunction} from "express";
import AppError from "@/error/AppError";
import {verify} from "jsonwebtoken";
import authConfig from "@/config/auth";

export default function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw new AppError("Auth token não informado", 401);
    }

    const [,authToken] = authHeader.split(" ");
    const {sub: userId} = verify(authToken, authConfig.jwt.secret);

    req.user = {
        userId: String(userId)
    }

    return next();
}