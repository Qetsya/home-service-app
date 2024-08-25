import styles from './LoginRegister.module.scss';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import routes from '@/consts/routes';
import { UserContext } from '@/contexts/UserContext';

import { Form, Formik } from 'formik';
import { FormikInput } from '@/components/common/inputs/FormikInput';
import { AxiosBackendError } from '@/types/axiosBackendError';
import { loginUser } from '@/services/loginUser';
import { loginValidationSchema } from '@/consts/loginValidationSchema';
import { loginFormInitialValues } from '@/types/FormInitialValues';
import { UserRequest } from '@/types/User';
import { Button } from '@/components/common/buttons/Button';
import { enqueueSnackbar } from 'notistack';
import { Triangle } from 'react-loader-spinner';

export const LoginPage = () => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: UserRequest) => {
    setLoading(true);
    try {
      const response = await loginUser(values);
      userContext?.login(response);
      enqueueSnackbar('Logged In Successfully!');
      navigate(routes.HOME);
    } catch (error) {
      const errorMessage = error as AxiosBackendError;
      setSubmitError(errorMessage.response.data.message ?? '');
    }
    setLoading(false);
  };

  useEffect(() => {
    if (userContext?.isLoggedIn) {
      navigate(routes.HOME);
    }
  });

  return (
    <div className={styles.background}>
      <Formik initialValues={loginFormInitialValues} validationSchema={loginValidationSchema} onSubmit={handleSubmit}>
        <Form className={styles.container}>
          <h2>Login</h2>
          <FormikInput type="email" placeholder="Email" name="email" />
          <FormikInput type="password" placeholder="Password" name="password" />

          {submitError && <span className={styles.error}>{submitError}</span>}
          {loading ? (
            <Triangle visible={true} height="40" width="40" color="#8056eb" ariaLabel="triangle-loading" />
          ) : (
            <Button animated type="submit">
              Submit
            </Button>
          )}
          <span className={styles.text}>
            Don't have an account?{' '}
            <span onClick={() => navigate(routes.REGISTER_PAGE)} className={styles.signUpLink}>
              Sign Up here!
            </span>
          </span>
        </Form>
      </Formik>
    </div>
  );
};
