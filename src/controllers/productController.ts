import { Request, Response } from "express";
import ProductService from "../services/productService";
import { Product } from "../models/product";

class ProductController {
    public static async get(req: Request, res: Response) {
        const products = await ProductService.getAllProducts();
        res.status(200).json(products);
    }

    public static async post(req: Request, res: Response) {
        const product: Product = req.body;
        await ProductService.createProduct(product);
        res.status(200).send("Product created successfully!");
    }
}

export default ProductController;