import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        cartIems: Array,
        amount: String,
        status: String,
        creditedAt: Date
    }
)

export const orderModel = mongoose.model('order', orderSchema)

