import { NextFunction, Request, Response } from "express";
import Joi from "joi";

const schema = Joi.object({
    partial_product: Joi.object({
        title: Joi.string()
            .min(3)
            .max(30)
            .optional(),
    
        price: Joi.number()
            .greater(0)
            .optional(),
    
        description: Joi.string()
            .min(3)
            .max(150)
            .optional()
    })
    .optional()
});

export const validatePartialProduct = (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if(error) {
        return res.status(422).json({ error: "The given body is invalid!", msg: error.details[0].message });
    }
    next();
}