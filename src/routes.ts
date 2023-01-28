import { Router } from "express";
import { validateProduct } from "./services/products/AddProduct/AddProduct.middleware";
import { buildAddProduct } from "./services/products/AddProduct/buildAddProductService";
import { buildGetProduct } from "./services/products/GetProduct/buildGetProduct";
import { validateSelectOptions } from "./services/products/GetProduct/GetProduct.middleware";
import { buildGetProducts } from "./services/products/GetProducts/buildGetProducts";
import { buildCreateUser } from "./services/users/CreateUser/buildCreateUser";

const router = Router();

// Products
router.post("/products", validateProduct, (req, res) => buildAddProduct().handle(req, res));

router.get("/products/all", (req, res) => buildGetProducts().handle(req, res));

router.get("/products/:id", validateSelectOptions, (req, res) => buildGetProduct().handle(req, res));

// Users
router.post("/signup", (req, res) => buildCreateUser().handle(req, res));

export default router;