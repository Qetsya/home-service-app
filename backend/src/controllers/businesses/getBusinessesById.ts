import { Request, Response } from 'express';
const Business = require('../../schemas/Business');

export const getBusinessesById = async (req: Request, res: Response) => {
  try {
    const business = await Business.findById(req.params.id);
    res.json(business);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
