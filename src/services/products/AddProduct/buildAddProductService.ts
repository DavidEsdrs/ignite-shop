import { testProductsRepository } from "../../../repositories/implementations/test/TestProductsRepository";
import { productsRepository } from "../../../repositories/implementations/typeorm/ProductsRepository";
import { AddProductController } from "./AddProductController";
import { AddProductService } from "./AddProductService"

export const buildAddProduct = () => {
    const service = new AddProductService(productsRepository);
    const controller = new AddProductController(service);
    return controller;
}