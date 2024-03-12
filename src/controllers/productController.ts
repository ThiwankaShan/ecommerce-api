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

    public static async update(req: Request, res: Response) {
        try {
            const sku: string = req.params.sku;
            const product: Product = req.body.product;
            const updatedProduct = await ProductService.updateProduct(sku, product);
            res.status(200).json(updatedProduct);
        } catch (e) {
            res.status(500).send("Error while updating product");
        }
    }

    public static async delete(req: Request, res: Response) {
        try {
            const sku: string = req.params.sku;
            await ProductService.deleteProduct(sku);
            res.status(200).send("Product deleted successfully!");
        } catch (e) {
            res.status(500).send("Error while deleting product");
        }
    }

    public static async search(req: Request, res: Response) {
        console.log(req.params.searchterm);
        try {
            const searchTerm: string = req.params.searchterm as string;
            const products = await ProductService.getProducts(searchTerm);
            res.status(200).json(products);
        } catch (e) {
            res.status(500).send("Error while searching product");
        }
    }
}

export default ProductController;