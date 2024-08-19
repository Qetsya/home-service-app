import { Request, Response } from 'express';
const User = require('../../schemas/User');
const { generateToken } = require('../../utils/password');

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide email and password' });
    }

    const user = await User.findOne({ email });

    const isPasswordValid = await user?.isCorrectPassword(password);
    if (!user || !isPasswordValid) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }

    const token = generateToken({ id: user._id });

    const userWithoutPassword = await User.findById(user._id).select('-password');
    return res.status(200).json({ status: 'success', token, user: userWithoutPassword });
  } catch (error) {
    return res.status(500).json({ message: 'Error logging in.', error: error.message });
  }
};
