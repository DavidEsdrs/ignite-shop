import { NextFunction, Request, Response } from "express";

export const errorHandler = async (error: Error, req: Request, res: Response, next: NextFunction) => {
    if(error) {
        return res.json({ error })
    }

    else {
        return next();
    }
}