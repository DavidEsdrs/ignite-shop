import { Router } from "express";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticatedUser } from "./middlewares/ensureAuthenticatedUser";
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
import { validateLoginUser } from "./services/users/LoginUser/LoginUser.middleware";

const router = Router();

// Products
router.post("/products", ensureAuthenticatedUser, ensureAdmin, validateProduct, (req, res) => buildAddProduct().handle(req, res));

router.delete("/products/:id", ensureAuthenticatedUser, ensureAdmin, (req, res) => buildRemoveProduct().handle(req, res));

router.get("/products/all", validateQueryOptions, (req, res) => buildGetProducts().handle(req, res));

router.get("/products/:id", validateSelectOptions, (req, res) => buildGetProduct().handle(req, res));

router.put("/products/:id", ensureAuthenticatedUser, ensureAdmin, validatePartialProduct, (req, res) => buildEditProduct().handle(req, res));

// Users
router.post("/signup", (req, res) => buildCreateUser().handle(req, res));

router.post("/login", validateLoginUser, (req, res) => buildLoginService().handle(req, res));

export default router;