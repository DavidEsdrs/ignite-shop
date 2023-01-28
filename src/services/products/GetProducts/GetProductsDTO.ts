import { ISelectOptions } from "../GetProduct/GetProductDTO";

export interface IGetProductsDTO {
    select?: ISelectOptions,
    take?: number
}