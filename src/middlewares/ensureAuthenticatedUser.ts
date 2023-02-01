import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export const ensureAuthenticatedUser = (req: Request, res: Response, next: NextFunction) => {
    const auth = req.headers.authorization;
    if(!auth) {
        throw new Error("Invalid authorization!");
    }

    const [ , token ] = auth.split(' ');

    if(!token) {
        throw new Error("Invalid authorization!");
    }

    try {
        const { sub } = verify(token, process.env.JWT_TOKEN) as IPayload;
        req.user_id = sub;
        return next();
    }

    catch {
        return res.status(404).json({ error: "Invalid authorization!" });
    }    
}