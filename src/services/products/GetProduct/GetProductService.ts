import { IProductsRepository } from "../../../repositories/IProductsRepository";
import { IGetProductDTO, ISelectOptions } from "./GetProductDTO";

export class GetProductService {
    default_options: ISelectOptions = {
        title: true, 
        description: true, 
        price: true, 
        image_path: true, 
        created_at: true, 
        updated_at: true 
    };

    constructor(
        private productsRepository: IProductsRepository
    ) {}

    async execute({ id, select }: IGetProductDTO) {
        const { title, description, price, image_path, created_at, updated_at } = select ?? this.default_options;
        const product = await this.productsRepository.findById(id, { title, description, price, image_path, created_at, updated_at });
        if(!product) {
            throw new Error("The given product ID doesn't exist in the database!");
        }
        return product;
    }
}