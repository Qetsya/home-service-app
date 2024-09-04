import { BookingModel } from '@/types/BookingModel';
import axiosInstance from './axiosInstance';

export const getBookings = async (email: string): Promise<BookingModel[]> => {
  const response = await axiosInstance.get(`/bookings/user/${email}`);
  return response.data;
};
