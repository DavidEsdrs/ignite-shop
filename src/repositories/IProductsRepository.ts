import { Product } from "../entities/Product";

export interface IProductsRepository {
    findByTitle(title: string): Promise<Product>;
    create(args: Partial<Product>): Product;
    save(product: Product): Promise<void>;
}