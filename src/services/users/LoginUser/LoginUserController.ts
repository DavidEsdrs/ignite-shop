import { Request, Response } from "express";
import { ILoginUserDTO } from "./LoginUserDTO";

interface ILoginUserService {
    execute(args: ILoginUserDTO): Promise<string>;
}

export class LoginUserController {
    constructor(
        private service: ILoginUserService
    ) {}

    async handle(req: Request, res: Response) {
        const { email, password } = req.body;
        const token = await this.service.execute({ email, password });
        return res.json(token);
    }
}