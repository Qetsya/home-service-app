import styles from './LoginRegister.module.css';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import routes from '@/consts/routes';
import { UserContext } from '@/contexts/UserContext';

import { Form, Formik } from 'formik';
import { FormikInput } from '@/components/common/inputs/FormikInput';
import { AxiosBackendError } from '@/types/axiosBackendError';
import { loginValidationSchema } from '@/consts/loginValidationSchema';
import { loginFormInitialValues } from '@/consts/FormInitialValues';
import { UserRequest } from '@/types/User';
import { Button } from '@/components/common/buttons/Button';
import { enqueueSnackbar } from 'notistack';
import { Loader } from '@/components/common/Loader';
import { useLoginUser } from '@/hooks/user';

export const LoginPage = () => {
  const { mutateAsync: loginUser } = useLoginUser();

  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (values: UserRequest) => {
    try {
      const response = await loginUser(values);
      userContext?.login(response);
      enqueueSnackbar('Logged In Successfully!');
      navigate(routes.HOME);
    } catch (error) {
      const errorMessage = error as AxiosBackendError;
      setSubmitError(errorMessage.response.data.message ?? '');
    }
  };

  useEffect(() => {
    if (userContext?.isLoggedIn) {
      navigate(routes.HOME);
    }
  }, [userContext?.isLoggedIn, navigate]);

  return (
    <div className={styles.background}>
      <Formik initialValues={loginFormInitialValues} validationSchema={loginValidationSchema} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className={`${styles.container} sm:min-w-96`}>
            <h2>Login</h2>
            <FormikInput type="email" placeholder="Email" name="email" />
            <FormikInput type="password" placeholder="Password" name="password" />

            {submitError && <span className={styles.error}>{submitError}</span>}
            {isSubmitting ? (
              <Loader size="40" />
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
        )}
      </Formik>
    </div>
  );
};
