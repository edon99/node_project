import { Router } from 'express';
import { authenticate } from "../middlewares/auth.middleware.js";
import { isOwner } from "../middlewares/role.middleware.js";
import * as categoryController from '../controllers/category.controller.js';

const router = Router();

router.get('/', categoryController.getCategories);
router.post('/', authenticate, isOwner, categoryController.createCategory);
router.get('/:id', authenticate, isOwner, categoryController.getCategory);
router.put('/:id', authenticate, isOwner, categoryController.editCategory);
router.delete('/:id', authenticate, isOwner, categoryController.deleteCategory);


export default router;
    