import axiosInstance from './axiosInstance';
import { UserResponse, UserRequest } from '@/types/User';

export const loginUser = async (user: UserRequest): Promise<UserResponse> => {
  const response = await axiosInstance.post('/auth/login', user);
  return response.data;
};
