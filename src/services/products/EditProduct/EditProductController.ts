import { Request, Response } from "express";
import { ResponseEntity } from "../../../api/ResponseEntity";
import { Product } from "../../../entities/Product";
import { IEditProductDTO } from "./EditProductDTO";

interface IEditProductService {
    execute(args: IEditProductDTO): Promise<ResponseEntity<Product>>;
}

export class EditProductController {
    constructor(
        private service: IEditProductService
    ) {}

    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { partial_product } = req.body;
        const result = await this.service.execute({ id, partial_product });
        return res.status(result.status).json(result);
    }
}