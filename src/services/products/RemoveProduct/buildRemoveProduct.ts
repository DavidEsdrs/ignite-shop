import { productsRepository } from "../../../repositories/implementations/typeorm/ProductsRepository"
import { RemoveProductController } from "./RemoveProductController";
import { RemoveProductService } from "./RemoveProductService"

export const buildRemoveProduct = () => {
    const service = new RemoveProductService(productsRepository);
    const controller = new RemoveProductController(service);
    return controller;
}