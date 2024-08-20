import express from 'express';
import { getBusinesses } from '../controllers/businesses/getBusinesses';
import { getBusinessesByCategory } from '../controllers/businesses/getBusinessesByCategory';
import { getBusinessesById } from '../controllers/businesses/getBusinessesById';
import { addBusiness } from '../controllers/businesses/addBusiness';
import { updateBusiness } from '../controllers/businesses/updateBusiness';
import { getBusinessBookingsByDate } from '../controllers/businesses/getBusinessBookingsByDate';

const router = express.Router();

router.get('/', getBusinesses);
router.get('/category/:category', getBusinessesByCategory);
router.get('/:id', getBusinessesById);
router.post('/', addBusiness);
router.put('/:id', updateBusiness);
router.get('/:businessId/bookings/date/:date', getBusinessBookingsByDate);

export const businessRouter = router;
