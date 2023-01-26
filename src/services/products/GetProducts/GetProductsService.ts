import { IProductsRepository } from "../../../repositories/IProductsRepository";
import { GetProductsDTO } from "./GetProductsDTO";

export class GetProductsService {
    constructor(
        private productsRepository: IProductsRepository
    ) {}

    async execute(args: GetProductsDTO) {
        const products = await this.productsRepository.getProducts({ take: args.take });
        return products;
    }
}