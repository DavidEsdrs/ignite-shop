import { Product } from "../../../entities/Product";

export type PartialProduct = Partial<Pick<Product, "title" | "price" | "description">>;

export interface IEditProductDTO {
    id: string;
    partial_product: PartialProduct;
}