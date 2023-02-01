import { ResponseEntity } from "../../../api/ResponseEntity";
import { Product } from "../../../entities/Product";
import { IProductsRepository } from "../../../repositories/IProductsRepository";
import { IEditProductDTO } from "./EditProductDTO";

export class EditProductService {
    constructor(
        private productsRepository: IProductsRepository
    ) {}

    async execute({ id, partial_product  }: IEditProductDTO): Promise<ResponseEntity<Product>> {
        const p = await this.productsRepository.findById(id);
        if(!p) {
            return {
                message: "The given ID doesn't exists in the database!",
                status: 400,
                successful: false,
                body: undefined
            }
        }
        await this.productsRepository.editProduct(id, partial_product);
        
        return {
            message: "Product updated",
            status: 200,
            successful: true,
            body: {
                ...p,
                ...partial_product
            }
        }
    }
}