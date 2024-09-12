import { Request, Response } from 'express';
const { generateToken } = require('../../utils/password');
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

    const token = generateToken({ id: newUser._id });
    const userWithoutPassword = await User.findById(newUser._id).select('-password');
    return res.status(200).json({ token, user: userWithoutPassword });
  } catch (error) {
    return res.status(500).json({ message: 'Error registering new user.', error: (error as Error).message });
  }
};
