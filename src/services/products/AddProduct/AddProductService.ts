import { IProductsRepository } from "../../../repositories/IProductsRepository";
import { IAddProductDTO } from "./AddProductDTO";

export class AddProductService {
    constructor(
        private productsRepository: IProductsRepository
    ) {}

    async execute(args: IAddProductDTO) {
        const productAlreadyExists = await this.productsRepository.findByTitle(args.title);
        if(productAlreadyExists) {
            throw new Error("The given product.title already exists!");
        }
        const product = this.productsRepository.create(args);
        await this.productsRepository.save(product);
        return product;
    }
}