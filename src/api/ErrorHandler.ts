import { NextFunction, Request, Response } from "express";
import { APIErrors } from "./APIErrors";

export const errorHandler = async (error: APIErrors, req: Request, res: Response, next: NextFunction) => {
    if(error) {
        return res.status(error.status || 400).json({ 
            error: {
                message: error.message
            }
        });
    }
    return next();
}