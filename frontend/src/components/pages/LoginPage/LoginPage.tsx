import styles from "./LoginPage.module.scss";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import routes from "@/consts/routes";
import { UserContext } from "@/contexts/UserContext";
import { Input } from "@/components/common/Input";

export const LoginPage = () => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [touched, setTouched] = useState(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!emailError && !passwordError && touched) {
      const user = { email, password };
      userContext?.login(user);
      navigate(routes.HOME);
    } else {
      setEmailError("This field is required");
      setPasswordError("This field is required");
    }
  };

  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]+$"
  );

  const validPassword = new RegExp(
    "^(?=.*[A-Z])(?=.*?[A-Za-z])(?=.*?[0-9]).{6,15}$"
  );

  const validateEmail = () => {
    setTouched(true);
    if (email.length === 0) {
      setEmailError("This field is required");
    } else if (!validEmail.test(email)) {
      setEmailError("Email is invalid!");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    setTouched(true);
    if (password.length === 0) {
      setPasswordError("This field is required");
    } else if (!validPassword.test(password)) {
      setPasswordError("Password is invalid!");
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className={styles.background}>
      <form className={styles.container}>
        <h2>Login</h2>
        <Input
          type="email"
          value={email}
          name="email"
          placeholder="Email"
          onChange={handleEmailChange}
          onBlur={validateEmail}
          error={emailError}
        />
        <Input
          type="password"
          value={password}
          name="password"
          placeholder="Password"
          onChange={handlePasswordChange}
          onBlur={validatePassword}
          error={passwordError}
        />
        <button type="submit" className={styles.button} onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};
