import { Request, Response } from "express";
import { Product } from "../../../entities/Product";
import { IAddProductDTO } from "./AddProductDTO";

interface IAddProductService {
    execute(args: IAddProductDTO): Promise<Product>;
}

export class AddProductController {
    constructor(
        private service: IAddProductService
    ) {}

    async handle(req: Request, res: Response) {
        const { title, price, description, tags } = req.body;
        const product = await this.service.execute({ title, price, description, tags });
        return res.json({ product });
    }
}