import { BusinessModel } from '@/types/BusinessModel';
import axiosInstance from './axiosInstance';

export const getBusinessById = async (id: string): Promise<BusinessModel> => {
  const response = await axiosInstance.get(`/businesses/${id}`);
  return response.data;
};
