import { Product, ProductModel } from './../models/product';

class ProductService {
    public static async getAllProducts() {
        try {
            const products = await ProductModel.find();
            return products;
        } catch (e) {
            throw new Error("Error while getting products \n " + e);
        }
    }

    public static async createProduct(product: Product) {
        try {
            const newProduct = new ProductModel(product);
            await newProduct.save();
        } catch (e) {
            throw new Error("Error while creating product \n " + e);
        }
    }
}

export default ProductService;