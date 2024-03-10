import { Product, ProductModel } from './../models/product';

class ProductService {
    public static async getAllProducts() {
        try {
            const products = await ProductModel.find();
            return products;
        } catch {
            throw new Error("Error while getting products");
        }
    }

    public static async createProduct(Product: Product) {
        try {
            const newProduct = new ProductModel(Product);
            await newProduct.save();
        } catch {
            throw new Error("Error while creating product");
        }
    }
}

export default ProductService;