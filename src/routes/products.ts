import express from "express";
import ProductController from "../controllers/productController"

const productRouter = express.Router();

productRouter.get("/", ProductController.get)
productRouter.post("/", ProductController.post)

export default productRouter;
