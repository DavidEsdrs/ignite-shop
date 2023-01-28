import { IProductsRepository } from "../../../repositories/IProductsRepository";
import { IGetProductsDTO } from "./GetProductsDTO";

export class GetProductsService {
    constructor(
        private productsRepository: IProductsRepository
    ) {}

    async execute({ select, take }: IGetProductsDTO) {
        const products = await this.productsRepository.getProducts({ take, select });
        return products;
    }
}