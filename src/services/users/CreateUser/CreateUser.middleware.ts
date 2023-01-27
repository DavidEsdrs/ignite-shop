import { NextFunction, Request, Response } from "express";
import Joi from "joi";

const schema = Joi.object({
    username: Joi.string()
        .min(3)
        .max(15)
        .trim(true)
        .required(),

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

export const validateUser = (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if(error) {
        return res.status(422).json({ 
            code: 422,
            message: "Unprocessable entity!"
        });
    }
    next();
}