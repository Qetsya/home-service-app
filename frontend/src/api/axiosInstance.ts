import axios, { AxiosError, AxiosRequestConfig } from 'axios';
const { PROD } = import.meta.env;

const baseURL = PROD ? 'https://home-service-app-frontend.vercel.app/' : 'http://localhost:3000/';

const config: AxiosRequestConfig = {
  baseURL,
};

export const axiosInstance = axios.create(config);

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      const parsedToken = JSON.parse(token);
      config.headers.Authorization = `Bearer ${parsedToken}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
