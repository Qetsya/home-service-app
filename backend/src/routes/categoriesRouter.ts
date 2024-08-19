import express from 'express';
import { getCategories } from '../controllers/categories/getCategories';
import { createCategory } from '../controllers/categories/createCategory';
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, getCategories);
router.post('/', authMiddleware, createCategory);

export const categoryRouter = router;
