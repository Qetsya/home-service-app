import { BusinessModel } from '@/types/BusinessModel';
import axiosInstance from './axiosInstance';

export const getBusinesses = async (): Promise<BusinessModel[]> => {
  const response = await axiosInstance.get('http://localhost:3000/businesses');
  return response.data;
};
