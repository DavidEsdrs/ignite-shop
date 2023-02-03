import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import { InvalidRequestBodyError } from "../../../api/APIErrors";

const schema = Joi.object({
    email: Joi.string()
        .email({
            tlds: {
                allow: [ "com", "net", "org" ]
            }
        })
        .required(),
    
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required()
});

export const validateLoginUser = (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if(error) {
        throw new InvalidRequestBodyError(error.message);
    }
    return next();
}