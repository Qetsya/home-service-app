import axios from 'axios';
import { CategoryModel } from '@/types/CategoryModel';

export const getCategories = async (): Promise<CategoryModel[]> => {
  return axios
    .get('http://localhost:3000/categories')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(error);
    });
};
