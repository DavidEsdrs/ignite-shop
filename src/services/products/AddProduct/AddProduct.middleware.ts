import { response, Response } from "express";
import { NextFunction } from "express";
import { Request } from "express";
import Joi from "joi"

const schema = Joi.object({
});

const validateBook = (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);

    if(error) {
        return res.status(422).json({ error: "The given body is invalid!" });
    }

    next();
}

export default validateBook;