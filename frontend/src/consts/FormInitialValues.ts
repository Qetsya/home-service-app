import { UserToValidate, UserRequest } from '../types/User';

export const registerFormInitialValues: UserToValidate = {
  name: '',
  age: '',
  email: '',
  password: '',
  repeatPassword: '',
};

export const loginFormInitialValues: UserRequest = {
  email: '',
  password: '',
};
