import styles from './LoginRegister.module.scss';
import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import routes from '@/consts/routes';
import { UserContext } from '@/contexts/UserContext';
import { useValidate } from '@/hooks/useValidate';
import { Input } from '@/components/common/inputs/Input';
import { AnimatedButton } from '../../common/buttons/AnimatedButton';

export const LoginPage = () => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { validateEmail, validatePassword, touched, emailError, passwordError } = useValidate();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      validateEmail(email);
      validatePassword(password);
      if (!emailError && !passwordError && touched) {
        const user = { email, password };
        userContext?.login(user);
        navigate(routes.HOME);
      }
    } catch {
      console.log('Please enter valid data');
    }
  };

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
        <AnimatedButton type="submit" onClick={() => handleSubmit}>
          Submit
        </AnimatedButton>
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
