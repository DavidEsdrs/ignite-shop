import { productsRepository } from "../../../repositories/implementations/typeorm/ProductsRepository"
import { EditProductController } from "./EditProductController";
import { EditProductService } from "./EditProductService"

export const buildEditProduct = () => {
    const service = new EditProductService(productsRepository);
    const controller = new EditProductController(service);
    return controller;
}