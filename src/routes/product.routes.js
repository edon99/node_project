import { Router } from 'express';
import { authenticate } from "../middlewares/auth.middleware.js";
import { isOwner } from "../middlewares/role.middleware.js";
import * as productController from '../controllers/product.controller.js';

const router = Router();

router.get('/', productController.getProducts);
router.post('/', authenticate, isOwner, productController.createProduct);
router.get('/:id', authenticate, isOwner, productController.getProduct);
router.put('/:id', authenticate, isOwner, productController.editProduct);
router.delete('/:id', authenticate, isOwner, productController.deleteProduct);


export default router;
    