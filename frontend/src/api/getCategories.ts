import axiosInstance from './axiosInstance';
import { CategoryModel } from '@/types/CategoryModel';

export const getCategories = async (): Promise<CategoryModel[]> => {
  const response = await axiosInstance.get('/categories');
  return response.data;
};
