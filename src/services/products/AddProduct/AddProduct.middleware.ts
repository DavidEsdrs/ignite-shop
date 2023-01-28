import { response, Response } from "express";
import { NextFunction } from "express";
import { Request } from "express";
import Joi from "joi"

const schema = Joi.object({
    title: Joi.string()
        .min(3)
        .max(30)
        .required(),
    
    price: Joi.number()
        .greater(0)
        .required(),
    
    description: Joi.string()
        .min(3)
        .max(150)
        .optional()
});

export const validateProduct = (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);

    if(error) {
        return res.status(422).json({ error: "The given body is invalid!" });
    }

    next();
}
