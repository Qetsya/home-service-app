import { Request, Response } from 'express';
const Category = require('../../schemas/Category');

export const createCategory = async (req: Request, res: Response) => {
  const body = req.body;
  const newCategory = new Category(body);

  try {
    const savedCategory = await newCategory.save();
    if (!savedCategory) {
      res.status(400).json({ message: "Couldn't save category." });
    } else {
      res.status(201).json(savedCategory);
    }
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};
