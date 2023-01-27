export interface IGetProductDTO {
    id: string;
    select?: ISelectOptions;
}

export interface ISelectOptions {
    title?: boolean,
    image_path?: boolean,
    price?: boolean,
    description?: boolean,
    created_at?: boolean,
    updated_at?: boolean
}