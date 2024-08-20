import axios from 'axios';
import { BusinessModel } from '@/types/BusinessModel';

export const getBusinesses = async (): Promise<BusinessModel[]> => {
  return axios
    .get('http://localhost:3000/businesses')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(error);
    });
};
