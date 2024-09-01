import axiosInstance from './axiosInstance';
import { BookingModel } from '@/types/BookingModel';

export const createBooking = async (newBooking: BookingModel): Promise<BookingModel> => {
  const response = await axiosInstance.post('/bookings', newBooking);
  return response.data;
};
