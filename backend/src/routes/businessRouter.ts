import express from 'express';
import { getBusinesses } from '../controllers/businesses/getBusinesses';
import { getBusinessesByCategory } from '../controllers/businesses/getBusinessesByCategory';
import { getBusinessesById } from '../controllers/businesses/getBusinessesById';
import { addBusiness } from '../controllers/businesses/addBusiness';
import { updateBusiness } from '../controllers/businesses/updateBusiness';
import { getBusinessBookingsByDate } from '../controllers/businesses/getBusinessBookingsByDate';
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, getBusinesses);
router.get('/category/:category', authMiddleware, getBusinessesByCategory);
router.get('/:id', authMiddleware, getBusinessesById);
router.post('/', authMiddleware, addBusiness);
router.put('/:id', authMiddleware, updateBusiness);
router.get('/:businessId/bookings/date/:date', authMiddleware, getBusinessBookingsByDate);

export const businessRouter = router;
