import { NextFunction, Request, Response } from "express";
import { usersRepository } from "../repositories/implementations/typeorm/UsersRepository";

export const ensureAdmin = async (req: Request, res: Response, next: NextFunction) => {
    const { user_id } = req;
    const { admin } = await usersRepository.findOne({ 
        where: {
            id: user_id
        }
    });
    if(!admin) {
        throw new Error("Unnauthorized request!");
    }
    return next();
}