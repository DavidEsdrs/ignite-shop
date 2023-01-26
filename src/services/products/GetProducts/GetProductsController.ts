import { Request, Response } from "express";
import { Product } from "../../../entities/Product";

interface IGetProductsService {
    execute(args?: { take?: number; }): Promise<Product[]>;
}

export class GetProductsController {
    constructor(
        private service: IGetProductsService
    ) {}

    async handle(req: Request, res: Response) {
        const { take } = req.body;
        const products = await this.service.execute({ take });
        return res.json({ products });
    }
}