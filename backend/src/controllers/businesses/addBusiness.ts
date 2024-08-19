import { Request, Response } from 'express';
const Business = require('../../schemas/Business');

export const addBusiness = async (req: Request, res: Response) => {
  const newBusiness = new Business(req.body);
  try {
    const savedBusiness = await newBusiness.save();
    res.status(201).json(savedBusiness);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
