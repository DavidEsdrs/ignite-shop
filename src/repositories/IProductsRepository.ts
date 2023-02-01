import { Product } from "../entities/Product";
import { PartialProduct } from "../services/products/EditProduct/EditProductDTO";
import { ISelectOptions } from "../services/products/GetProduct/GetProductDTO";

export interface IProductsRepository {
    findByTitle(title: string): Promise<Product>;
    create(args: Partial<Product>): Product;
    save(product: Product): Promise<void>;
    getProducts(args?: { select?: ISelectOptions, take?: number }): Promise<Product[]>;
    findById(id: string, select?: ISelectOptions): Promise<Product>;
    removeProductById(id: string): Promise<void>;
    editProduct(id: string, partial_product: PartialProduct): Promise<void>;
}