import { Request, Response } from 'express';
const Booking = require('../../schemas/Booking');

export const deleteBooking = async (req: Request, res: Response) => {
  try {
    const deletedBooking = await Booking.findByIdAndDelete(req.params.id);
    res.json(deletedBooking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
