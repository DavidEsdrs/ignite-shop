import AppDataSource from "../../../../ormconfig";
import { Product } from "../../../entities/Product";

export const productsRepository = AppDataSource.getRepository(Product).extend({
    async findByTitle(title: string) {
        const product = await this.findOneBy({ title });
        return product;
    }
});