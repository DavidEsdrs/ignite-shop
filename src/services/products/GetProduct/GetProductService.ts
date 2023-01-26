import { IProductsRepository } from "../../../repositories/IProductsRepository";
import { IGetProductDTO } from "./GetProductDTO";

export class GetProductService {
    constructor(
        private productsRepository: IProductsRepository
    ) {}

    async execute({ id }: IGetProductDTO) {
        const product = await this.productsRepository.findById(id);
        if(!product) {
            throw new Error("The given product ID doesn't exist in the database!");
        }
        return product;
    }
}