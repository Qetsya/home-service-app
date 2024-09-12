import { Request, Response } from 'express';
const Booking = require('../../schemas/Booking');

export const getBusinessBookingsByDate = async (req: Request, res: Response) => {
  try {
    const bookings = await Booking.find({
      businessId: req.params.id,
      date: new Date(req.params.date),
    });
    res.json(bookings);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};
