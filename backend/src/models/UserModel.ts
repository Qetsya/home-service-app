import mongoose from 'mongoose';
import { Types } from 'mongoose';

export interface User extends mongoose.Document {
  _id: Types.ObjectId;
  name: string;
  age?: number;
  email: string;
  password: string;
  isCorrectPassword: (password: string) => Promise<boolean>;
}
