import styles from './LoginRegister.module.scss';
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import routes from '@/consts/routes';
import { UserContext } from '@/contexts/UserContext';
import { useValidate } from '@/hooks/useValidate';
import { Input } from '@/components/common/inputs/Input';
import { AnimatedButton } from '../../common/buttons/AnimatedButton';
import { loginUser } from '@/services/loginUser';
import { Triangle } from 'react-loader-spinner';
import { AxiosBackendError } from '@/types/axiosBackendError';
import { enqueueSnackbar } from 'notistack';

export const LoginPage = () => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [loading, setLoading] = useState(false);

  const { validateEmail, validatePassword, touched, emailError, passwordError } = useValidate();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSubmitError('');
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSubmitError('');
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    validateEmail(email);
    validatePassword(password);
    if (!emailError && !passwordError && touched) {
      try {
        const user = { email, password };
        const response = await loginUser(user);
        enqueueSnackbar('Logged In Successfully!');
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
        <h2>Login</h2>
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
        {submitError && <span className={styles.error}>{submitError}</span>}
        {loading ? (
          <Triangle visible={true} height="40" width="40" color="#8056eb" ariaLabel="triangle-loading" />
        ) : (
          <AnimatedButton onClick={handleSubmit}>Submit</AnimatedButton>
        )}
        <span className={styles.text}>
          Don't have an account?{' '}
          <span onClick={() => navigate(routes.REGISTER_PAGE)} className={styles.signUpLink}>
            Sign Up here!
          </span>
        </span>
      </form>
    </div>
  );
};
