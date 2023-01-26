import { productsRepository } from "../../../repositories/implementations/typeorm/ProductsRepository"
import { GetProductsController } from "./GetProductsController";
import { GetProductsService } from "./GetProductsService"

export const buildGetProducts = () => {
    const service = new GetProductsService(productsRepository);
    const controller = new GetProductsController(service);
    return controller;
}