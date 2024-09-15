import express from 'express';
import cors from 'cors';

import { businessRouter } from './routes/businessRouter';
import { bookingRouter } from './routes/bookingRouter';
import { categoryRouter } from './routes/categoriesRouter';
import { PORT, connectToDb } from './db';

import { authRouter } from './routes/authRouter';

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(
  cors({
    origin: 'https://home-service-app-frontend.vercel.app' ?? 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }),
);

app.use('/auth', authRouter);
app.use('/categories', categoryRouter);
app.use('/businesses', businessRouter);
app.use('/bookings', bookingRouter);

connectToDb().then(() => {
  app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));
});
