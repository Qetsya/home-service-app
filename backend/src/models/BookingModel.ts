import { Types } from 'mongoose';
export interface Booking {
  businessId: Types.ObjectId;
  date: Date;
  time: string;
  userEmail: string;
  userName: string;
  status: 'confirmed' | 'pending' | 'cancelled';
}
