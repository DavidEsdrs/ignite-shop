import AppDataSource from "../../../ormconfig";
import { Product } from "../../../entities/Product";

export const productsRepository = AppDataSource.getRepository(Product).extend({
    async findByTitle(title: string) {
        const product = await this.findOneBy({ title });
        return product;
    },

    async getProducts(args?: { take?: number; }) {
        const products = await this.find({ take: args.take });
        return products;
    },

    async findById(id: string) {
        const product = await this.findOneBy({ id });
        return product;
    }
});