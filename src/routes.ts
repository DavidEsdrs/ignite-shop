import { Router } from "express";
import { buildAddProduct } from "./services/products/AddProduct/buildAddProductService";
import { buildGetProducts } from "./services/products/GetProducts/buildGetProducts";

const router = Router();

router.post("/product", (req, res) => buildAddProduct().handle(req, res));

router.get("/products/all", (req, res) => buildGetProducts().handle(req, res));

export default router;