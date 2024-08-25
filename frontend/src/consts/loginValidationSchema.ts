import * as Yup from 'yup';

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email('Email is not valid').required('Email is required'),
  password: Yup.string().min(7, 'Password is too short').required('Password is required'),
});
