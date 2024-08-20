import { useState } from 'react';

const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]+$');

const validPassword = new RegExp('^(?=.*[A-Z])(?=.*?[A-Za-z])(?=.*?[0-9]).{6,15}$');

export const useValidate = () => {
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [nameError, setNameError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [touched, setTouched] = useState(false);

  const validateEmail = (email: string) => {
    setTouched(true);
    if (email.length === 0) {
      setEmailError('This field is required');
    } else if (!validEmail.test(email)) {
      setEmailError('Email is invalid!');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = (password: string) => {
    setTouched(true);
    if (password.length === 0) {
      setPasswordError('This field is required');
    } else if (password.length < 7) {
      setPasswordError('Password is too short');
    } else if (!validPassword.test(password)) {
      setPasswordError('Password must contain 1 upper letter and a number!');
    } else {
      setPasswordError('');
    }
  };

  const validateName = (name: string) => {
    if (name.length < 3 || name.length > 15) {
      setNameError('Name must be between 3-15 characters in length');
    } else {
      setNameError('');
    }
  };

  const validateAge = (age: number | string) => {
    if (typeof age === 'string') {
      setAgeError('');
    } else if (age < 12 || age > 120) {
      setAgeError('Age must be valid');
    } else {
      setAgeError('');
    }
  };

  const checkIfPasswordsMatch = (psw: string, psw2: string) => {
    if (psw === psw2) {
      setPasswordError('');
      validatePassword(psw);
    } else {
      setPasswordError('Passwords must match!');
    }
  };

  return {
    validateEmail,
    validatePassword,
    touched,
    emailError,
    passwordError,
    validateName,
    nameError,
    validateAge,
    ageError,
    checkIfPasswordsMatch,
  };
};
