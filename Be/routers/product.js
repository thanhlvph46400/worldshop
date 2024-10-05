import { Router } from "express";
import { AddProduct, getProducts } from "../controllers/Product";

const router = Router();

router.get("/products", getProducts);
router.post("/products", AddProduct);

export default router;
