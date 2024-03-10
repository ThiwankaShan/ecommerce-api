import mongoose from 'mongoose';

export interface Product {
    sku: string;
    quantity: number;
    name: string;
    images: string[];
    description: string;
}

const ProductSchema = new mongoose.Schema({
    sku: { type: String, required: true },
    quantity: { type: Number, required: true },
    name: { type: String, required: true },
    images: { type: [String], required: true },
    description: { type: String, required: true }
}, {
    timestamps: true
});

export const ProductModel = mongoose.model('Product', ProductSchema);