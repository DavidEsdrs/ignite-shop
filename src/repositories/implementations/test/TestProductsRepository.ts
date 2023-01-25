import { Product } from "../../../entities/Product";
import { v4 as uuid } from "uuid";

export const testProductsRepository = {
    create({ title, price, description }: Partial<Product>): Product {
        return {
            id: uuid(),
            created_at: new Date(),
            updated_at: new Date(),
            image_path: "DEFAULT",
            price: price ?? 50,
            description: description ?? "DEFAULT",
            title: title ?? "DEFAULT"
        } as Product;
    },
    
    async save(args: Product): Promise<void> {
        console.log(`product ${args.title} saved!`);
    },

    async findByTitle(title: string): Promise<Product> {
        // const product = {
        //     id: uuid(),
        //     created_at: new Date(),
        //     updated_at: new Date(),
        //     image_path: "DEFAULT",
        //     price: 50,
        //     description: "DEFAULT_DESCRIPTION",
        //     title
        // };

        // return product;
        return Promise.reject();
    }
}