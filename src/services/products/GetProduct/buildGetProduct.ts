import { productsRepository } from "../../../repositories/implementations/typeorm/ProductsRepository"
import { GetProductController } from "./GetProductController";
import { GetProductService } from "./GetProductService"

export const buildGetProduct = () => {
    const service = new GetProductService(productsRepository);
    const controller = new GetProductController(service);
    return controller;
}