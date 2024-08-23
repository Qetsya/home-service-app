import styles from './LoginRegister.module.scss';
import { useState, ChangeEvent, FormEvent, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useValidate } from '@/hooks/useValidate';
import { UserContext } from '@/contexts/UserContext';
import { Input } from '@/components/common/inputs/Input';
import { AnimatedButton } from '@/components/common/buttons/AnimatedButton';
import routes from '@/consts/routes';
import { registerUser } from '@/services/registerUser';
import { Triangle } from 'react-loader-spinner';
import { AxiosBackendError } from '@/types/axiosBackendError';
import { enqueueSnackbar } from 'notistack';

export const RegisterPage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState<number | string>('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPasswordChange] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  const {
    validateEmail,
    validatePassword,
    emailError,
    passwordError,
    touched,
    validateName,
    nameError,
    validateAge,
    ageError,
    checkIfPasswordsMatch,
  } = useValidate();

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (+e.target.value === 0) {
      setAge('');
    } else {
      setAge(+e.target.value);
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRepeatPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRepeatPasswordChange(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    setLoading(true);
    setSubmitError('');
    e.preventDefault();
    if (!emailError && !passwordError && !nameError && !ageError && touched) {
      try {
        const newUser = { name, age, email, password };
        const response = await registerUser(newUser);
        enqueueSnackbar('Welcome!');
        userContext?.login(response);
        navigate(routes.HOME);
      } catch (error) {
        const errorMessage = error as AxiosBackendError;
        setSubmitError(errorMessage.response.data.message ?? '');
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userContext?.isLoggedIn) {
      navigate(routes.HOME);
    }
  });

  return (
    <div className={styles.background}>
      <form className={styles.container}>
        <h2>Register</h2>
        <Input
          type="text"
          value={name}
          placeholder="Name"
          onChange={handleNameChange}
          onBlur={() => {
            validateName(name);
          }}
          error={nameError}
        />
        <Input
          type="number"
          value={age}
          min="12"
          max="120"
          placeholder="Age"
          onChange={handleAgeChange}
          onBlur={() => {
            validateAge(age);
          }}
          error={ageError}
        />
        <Input
          type="email"
          value={email}
          placeholder="Email"
          onChange={handleEmailChange}
          onBlur={() => {
            validateEmail(email);
          }}
          error={emailError}
        />
        <Input
          type="password"
          value={password}
          placeholder="Password"
          onChange={handlePasswordChange}
          onBlur={() => {
            validatePassword(password);
          }}
          error={passwordError}
        />
        <Input
          type="password"
          value={repeatPassword}
          placeholder="Repeat Password"
          onChange={handleRepeatPasswordChange}
          onBlur={() => {
            checkIfPasswordsMatch(password, repeatPassword);
          }}
        />
        {submitError && <span className={styles.error}>{submitError}</span>}
        {loading ? (
          <Triangle visible={true} height="40" width="40" color="#8056eb" ariaLabel="triangle-loading" />
        ) : (
          <AnimatedButton type="submit" onClick={handleSubmit}>
            Submit
          </AnimatedButton>
        )}

        <span className={styles.text}>
          Already have and account?{' '}
          <span onClick={() => navigate(routes.LOGIN_PAGE)} className={styles.signUpLink}>
            Log In here!
          </span>
        </span>
      </form>
    </div>
  );
};
