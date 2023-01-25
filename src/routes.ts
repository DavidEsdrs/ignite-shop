import { Router } from "express";
import { buildAddProduct } from "./services/products/AddProduct/buildAddProductService";

const router = Router();

router.post("/product", (req, res) => buildAddProduct().handle(req, res));

export default router;