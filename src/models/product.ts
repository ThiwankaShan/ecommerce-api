import mongoose from 'mongoose';

export interface Product {
    sku: string;
    quantity: number;
    name: string;
    images: Image[];
    description: string;
    isFavourite: boolean;
}

export interface Image {
    isThumbnail: boolean;
    fileName: string;
    path: string;
}

const ProductSchema = new mongoose.Schema({
    sku: { type: String, required: true },
    quantity: { type: Number, required: true },
    name: { type: String, required: true },
    images: {
        type: [{
            isThumbnail: { type: Boolean, required: true, default: false },
            fileName: { type: String, required: true },
            path: { type: String, required: true }
        }], required: false
    },
    description: { type: String, required: true },
    isFavourite: { type: Boolean, required: true, default: false }
}, {
    timestamps: true
});

export const ProductModel = mongoose.model('Product', ProductSchema);