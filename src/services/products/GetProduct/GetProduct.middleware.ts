import { NextFunction, Request, Response } from "express";
import Joi from "joi";

const schema = Joi.object({
    select: Joi.object({
            title: Joi
                .boolean()
                .optional(),

            image_path: Joi
                .boolean()
                .optional(),

            price: Joi
                .boolean()
                .optional(),

            description: Joi
                .boolean()
                .optional(),

            created_at: Joi
                .boolean()
                .optional(),

            updated_at: Joi
                .boolean()
                .optional()
        })
        .optional()
});

export const validateSelectOptions = (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if(error) {
        return res.status(422).json({ 
            code: 422,
            message: "Unprocessable entity!",
            successful: false
        });
    }
    next();
}