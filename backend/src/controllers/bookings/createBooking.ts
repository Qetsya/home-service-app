import { Request, Response } from 'express';
const Booking = require('../../schemas/Booking');

export const createBooking = async (req: Request, res: Response) => {
  try {
    const newBooking = new Booking(req.body);
    const savedBooking = await newBooking.save();
    res.json(savedBooking);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};
