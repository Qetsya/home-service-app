import { Request, Response } from 'express';
const Booking = require('../../schemas/Booking');

export const getBookings = async (req: Request, res: Response) => {
  try {
    const bookings = await Booking.find({ userEmail: req.params.email });
    res.json(bookings);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
