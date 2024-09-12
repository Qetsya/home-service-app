import { Request, Response } from 'express';
const Business = require('../../schemas/Business');

export const getBusinessesByCategory = async (req: Request, res: Response) => {
  try {
    const businesses = await Business.find(req.params);
    res.json(businesses);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};
