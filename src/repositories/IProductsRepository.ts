import { Product } from "../entities/Product";
import { ISelectOptions } from "../services/products/GetProduct/GetProductDTO";

export interface IProductsRepository {
    findByTitle(title: string): Promise<Product>;
    create(args: Partial<Product>): Product;
    save(product: Product): Promise<void>;
    getProducts(args?: { select?: ISelectOptions, take?: number }): Promise<Product[]>;
    findById(id: string, select?: ISelectOptions): Promise<Product>;
}