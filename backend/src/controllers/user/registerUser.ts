import { Request, Response } from 'express';
const User = require('../../schemas/User');

export const registerUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const userExist = await User.findOne({ email: user.email });
    if (userExist) {
      return res.status(400).json({ message: 'User already exist' });
    }
    const newUser = new User(user);
    await newUser.save();
    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error registering new user.', error: error.message });
  }
};
