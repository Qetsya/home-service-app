import { UserToValidate } from '@/types/User';
import * as Yup from 'yup';

export const registerValidationSchema: Yup.Schema<UserToValidate> = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name is too short')
    .max(15, 'Name can be up to 15 characters in length')
    .required('Name is required'),
  age: Yup.number().min(16, 'You must be at least 16 years old').max(120, 'Age must be valid'),
  email: Yup.string().email('Email must be valid').required('Email is required'),
  password: Yup.string()
    .min(7, 'Password is too short')
    .required('Password is required')
    .matches(
      /^(?=.*[A-Z])(?=.*?[A-Za-z])(?=.*?[0-9]).{6,15}$/,
      'Must Contain 6 Characters, One Uppercase, One Lowercase and One Number',
    ),
  repeatPassword: Yup.string()
    .required('Password is required')
    .test('passwords-match', 'Passwords must match', function (value) {
      return this.parent.password === value;
    }),
});
