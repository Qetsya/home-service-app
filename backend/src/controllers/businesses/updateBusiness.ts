import { Request, Response } from 'express';
const Business = require('../../schemas/Business');

export const updateBusiness = async (req: Request, res: Response) => {
  try {
    const updatedBusiness = await Business.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBusiness);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
