import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import { InvalidRequestBodyError } from "../../../api/APIErrors";

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
        throw new InvalidRequestBodyError(error.message);
    }
    next();
}