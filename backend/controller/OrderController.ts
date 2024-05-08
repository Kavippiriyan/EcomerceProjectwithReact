import { orderModel } from "../Models/OrderModel"
import {ProductModel} from "../Models/ProductModel"
// create-order
export const createOrder = async (req: any, res: any, next: any) => {

    const cartIems = req.body
    const amount = cartIems.reduce((acc: any, item: any) => (acc + item.product.price * item.qty), 0)
    const status = 'pending'

    const order = await orderModel.create({ cartIems, amount, status })
    

    res.json({
        success: true,
        order
    })
}