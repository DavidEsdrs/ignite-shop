import { Request, Response } from "express";
import { Product } from "../../../entities/Product";
import { IGetProductsDTO } from "./GetProductsDTO";

interface IGetProductsService {
    execute(args?: IGetProductsDTO): Promise<Product[]>;
}

export class GetProductsController {
    constructor(
        private service: IGetProductsService
    ) {}

    async handle(req: Request, res: Response) {
        const { take, select } = req.body;
        const products = await this.service.execute({ take, select });
        return res.json({ products });
    }
}