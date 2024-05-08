import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        name:String,
        price:String,
        description:String,
        rating:String,
        images:[
            {
                image:String
            }
        ],
        category:String,
        seller:String,
        stock:String,
        numberofReviews:String,
        createdAt:Date

    }
);

export const ProductModel = mongoose.model('Product',ProductSchema)