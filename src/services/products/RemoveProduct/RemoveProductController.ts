import { Request, Response } from "express";
import { ResponseEntity } from "../../../api/ResponseEntity";
import { IRemoveProductDTO } from "./RemoveProductDTO";

interface IRemoveProductService {
    execute(args: IRemoveProductDTO): Promise<ResponseEntity>;
}

export class RemoveProductController {
    constructor(
        private service: IRemoveProductService
    ) {} 

    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const result = await this.service.execute({ id });
        return res.status(result.status).json(result);
    }
}