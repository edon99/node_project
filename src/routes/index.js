import { Router } from 'express';
import userRoutes from './user.routes.js';
import { index } from '../controllers/home.controller.js';

const router = Router();

router.use('/users', userRoutes);
router.get('/', index)

export default router;
