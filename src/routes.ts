import { Router } from "express";
import { validateQueryOptions } from "./middlewares/ValidateQueryOptions.middleware";
import { validateProduct } from "./services/products/AddProduct/AddProduct.middleware";
import { buildAddProduct } from "./services/products/AddProduct/buildAddProductService";
import { buildEditProduct } from "./services/products/EditProduct/buildEditProduct";
import { validatePartialProduct } from "./services/products/EditProduct/EditProduct.middleware";
import { buildGetProduct } from "./services/products/GetProduct/buildGetProduct";
import { validateSelectOptions } from "./services/products/GetProduct/GetProduct.middleware";
import { buildGetProducts } from "./services/products/GetProducts/buildGetProducts";
import { buildRemoveProduct } from "./services/products/RemoveProduct/buildRemoveProduct";
import { buildCreateUser } from "./services/users/CreateUser/buildCreateUser";
import { buildLoginService } from "./services/users/LoginUser/buildLoginService";

const router = Router();

// Products
router.post("/products", validateProduct, (req, res) => buildAddProduct().handle(req, res));

router.delete("/products/:id", (req, res) => buildRemoveProduct().handle(req, res));

router.get("/products/all", validateQueryOptions, (req, res) => buildGetProducts().handle(req, res));

router.get("/products/:id", validateSelectOptions, (req, res) => buildGetProduct().handle(req, res));

router.put("/products/:id", validatePartialProduct, (req, res) => buildEditProduct().handle(req, res));

// Users
router.post("/signup", (req, res) => buildCreateUser().handle(req, res));

router.post("/login", (req, res) => buildLoginService().handle(req, res));

export default router;