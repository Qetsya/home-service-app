import styles from './LoginRegister.module.scss';
import { useState } from 'react';
import { ChangeEvent, FormEvent } from 'react';
import { useValidate } from '@/hooks/useValidate';
import { Input } from '@/components/common/inputs/Input';
import { AnimatedButton } from '@/components/common/buttons/AnimatedButton';

export const RegisterPage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState<number | string>('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPasswordChange] = useState('');

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
    e.preventDefault();
    try {
      if (!emailError && !passwordError && !nameError && !ageError && touched) {
        const user = { name, age, email, password };
        console.log(user);
      }
    } catch {
      console.log('Please enter valid data');
    }
  };

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
        <AnimatedButton type="submit" onClick={() => handleSubmit}>
          Submit
        </AnimatedButton>
      </form>
    </div>
  );
};
