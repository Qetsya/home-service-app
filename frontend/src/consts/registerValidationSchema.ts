import * as Yup from 'yup';

export const registerValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name is too short')
    .max(15, 'Name can be up to 15 characters in length')
    .required('Name is required'),
  age: Yup.number().min(16, 'You must be at least 16 years old').max(120, 'Age must be valid'),
  email: Yup.string().email('Email must be valid').required('Email is required'),
  password: Yup.string()
    .min(7, 'Password is too short')
    // .minNumbers(1, "Password must contain at least one uppercase")
    .required('Password is required'),
  repeatPassword: Yup.string().min(7, 'Password is too short').required('Password is required'),
});
