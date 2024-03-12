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

    public static async updateProduct(sku: string, product: Product) {
        try {
            console.log("sku: ", sku);
            console.log("product: ", product)
            const updatedProduct = await ProductModel.findOneAndUpdate({ sku }, product, { new: true });
            console.log("updatedProduct: ", updatedProduct);
            return updatedProduct;
        } catch (e) {
            throw new Error("Error while updating product \n " + e);
        }
    }

    public static async deleteProduct(sku: string) {
        try {
            return await ProductModel.findOneAndDelete({ sku });
        } catch (e) {
            throw new Error("Error while deleting product \n " + e);
        }
    }

    public static async getProducts(searchTerm: string) {
        try {
            return await ProductModel.find({
                $or: [
                    { sku: { $regex: searchTerm, $options: 'i' } },
                    { name: { $regex: searchTerm, $options: 'i' } },
                    { description: { $regex: searchTerm, $options: 'i' } }
                ]
            });
        } catch (e) {
            throw new Error("Error while getting product \n " + e);
        }
    }
}

export default ProductService;