import { Request, Response, NextFunction } from 'express';
import { ProductModel } from '../Models/ProductModel';

const getProducts = async (req: Request, res: Response, next: NextFunction) => {

    const query = req.query.keyword ? {
        name: {
            $regex: req.query.keyword,
            $options: 'i'
        }
    } : {}

    const products = await ProductModel.find(query)
    res.json(
        {
            success: true,
            products
        }
    )

}
export const getSingleProduct = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const product = await ProductModel.findById(req.params.id)
        res.json(
            {
                success: true,
                product
            }
        )
    } catch (error: any) {
        res.status(404).json(
            {
                success: false,
                message: "Can't get product with this id"
            }
        )
    }





}

export default getProducts
