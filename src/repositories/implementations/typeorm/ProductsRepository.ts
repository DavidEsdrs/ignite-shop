import AppDataSource from "../../../ormconfig";
import { Product } from "../../../entities/Product";
import { ISelectOptions } from "../../../services/products/GetProduct/GetProductDTO";
import { IProductsRepository } from "../../IProductsRepository";

export const productsRepository = AppDataSource.getRepository(Product).extend({
    async findByTitle(title: string) {
        const product = await this.findOneBy({ title });
        return product;
    },

    async getProducts(args?: { select?: ISelectOptions, take?: number; }) {
        const products = await this.find({ 
            take: args.take, 
            select: args.select ? {
                id: true,
                ...args.select
            } : undefined
        });
        return products;
    },

    async findById(id: string, select?: ISelectOptions) {
        const product = await this.findOne({ 
            where: { id }, 
            select: select ? {
                id: true,
                ...select
            } : undefined
        });
        return product;
    }
});