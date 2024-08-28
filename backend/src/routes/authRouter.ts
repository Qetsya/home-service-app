import express from 'express';
import { registerUser } from '../controllers/user/registerUser';
import { loginUser } from '../controllers/user/loginUser';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

export const authRouter = router;
