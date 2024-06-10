import express from 'express';
import { getProducts, getProduct, postProduct, updateProduct, deleteProduct } from '../controllers/product.controller.js';
const router = express.Router();

router.get('/', getProducts);

router.get('/:id', getProduct);

router.post('/', postProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

export default router;