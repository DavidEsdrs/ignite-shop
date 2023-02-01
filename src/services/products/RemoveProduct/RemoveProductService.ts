import { ResponseEntity } from "../../../api/ResponseEntity";
import { Product } from "../../../entities/Product";
import { IProductsRepository } from "../../../repositories/IProductsRepository";
import { IRemoveProductDTO } from "./RemoveProductDTO";

export class RemoveProductService {
    constructor(
        private productsRepository: IProductsRepository
    ) {}

    async execute({ id }: IRemoveProductDTO): Promise<ResponseEntity<Product>> {
        try {
            await this.productsRepository.removeProductById(id);

            return {
                message: `Product ${id} removed!`,
                status: 200,
                successful: true,
                body: undefined
            }
        }
        
        catch {
            return {
                message: `Product ${id} wasn't removed!`,
                status: 400,
                successful: false,
                body: undefined
            }
        }
    }
}