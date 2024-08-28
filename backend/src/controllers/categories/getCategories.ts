import { Request, Response } from 'express';
const Category = require('../../schemas/Category');

export const getCategories = async (req: Request, res: Response) => {
  try {
    const data = await Category.find();
    res.json(data);
  } catch {
    res.status(500).json({ message: 'Error fetching categories' });
  }
};
