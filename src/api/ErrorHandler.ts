import { NextFunction, Request, Response } from "express";
import { APIErrors } from "./APIErrors";

export const errorHandler = async (error: APIErrors, req: Request, res: Response, next: NextFunction) => {
    if(error) {
        return res.status(error.status).json({ 
            error: {
            message: error.message
        }});
    }

    else {
        return next();
    }
}