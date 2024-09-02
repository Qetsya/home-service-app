import { BusinessModel } from '@/types/BusinessModel';
import axiosInstance from './axiosInstance';

export const getBusinesses = async (): Promise<BusinessModel[]> => {
  const response = await axiosInstance.get('/businesses');
  return response.data;
};
