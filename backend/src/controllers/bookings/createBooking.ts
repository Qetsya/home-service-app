import { Request, Response } from "express";
const Booking = require("../../schemas/Booking");

export const createBooking = async (req: Request, res: Response) => {
  const newBooking = new Booking(req.body);
  try {
    const savedBooking = await newBooking.save();
    res.json(savedBooking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
