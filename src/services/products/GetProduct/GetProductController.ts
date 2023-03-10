import { Request, Response } from "express";
import { Product } from "../../../entities/Product";
import { IGetProductDTO } from "./GetProductDTO";

interface IGetProductService {
    execute(args: IGetProductDTO): Promise<Product>;
}

export class GetProductController {
    constructor(
        private service: IGetProductService
    ) {}

    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { select } = req.body;
        const product = await this.service.execute({ id, select });
        return res.json(product);
    }
}