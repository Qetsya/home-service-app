import axiosInstance from './axiosInstance';
import { NewUser, UserResponse } from '@/types/User';

export const registerUser = async (newUser: NewUser): Promise<UserResponse> => {
  const response = await axiosInstance.post('/auth/register', newUser);
  return response.data;
};
