import {Request, Response, NextFunction} from "express";
import AppError from "@/error/AppError";
import {verify} from "jsonwebtoken";
import authConfig from "@/config/auth";

interface TokenPayload {
    role: string,
    sub: string
}

export default function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw new AppError("Auth token não informado", 401);
    }

    const [,authToken] = authHeader.split(" ");
    const {sub: userId, role} = verify(authToken, authConfig.jwt.secret) as TokenPayload;

    req.user = {
        userId: String(userId),
        role
    }

    return next();
}