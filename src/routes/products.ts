import express from "express";
import ProductController from "../controllers/productController"

const productRouter = express.Router();

productRouter.get("/", ProductController.get)
productRouter.post("/", ProductController.post)
productRouter.post("/update/:sku", ProductController.update)
productRouter.delete("/:sku", ProductController.delete)
productRouter.get("/search/:searchterm", ProductController.search)

export default productRouter;
