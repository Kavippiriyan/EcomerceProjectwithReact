import express from 'express';
import getProducts, {getSingleProduct} from '../controller/ProductController';

const router = express.Router();

router.route('/products').get(getProducts)
router.route('/products/:id').get(getSingleProduct);

export default router