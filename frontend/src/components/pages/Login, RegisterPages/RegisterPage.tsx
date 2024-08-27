import styles from './LoginRegister.module.scss';
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import routes from '@/consts/routes';
import { Formik, Form } from 'formik';
import { FormikInput } from '@/components/common/inputs/FormikInput';
import { UserContext } from '@/contexts/UserContext';
import { registerFormInitialValues } from '@/consts/FormInitialValues';
import { registerValidationSchema } from '@/consts/registerValidationSchema';
import { UserToValidate } from '@/types/User';
import { registerUser } from '@/services/registerUser';
import { AxiosBackendError } from '@/types/axiosBackendError';
import { enqueueSnackbar } from 'notistack';
import { Button } from '@/components/common/buttons/Button';
import { Triangle } from 'react-loader-spinner';

export const RegisterPage = () => {
  const [submitError, setSubmitError] = useState('');
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  const handleSubmit = async (newUser: UserToValidate) => {
    try {
      const response = await registerUser(newUser);
      userContext?.login(response);
      enqueueSnackbar('Welcome!');
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
      <Formik
        initialValues={registerFormInitialValues}
        validationSchema={registerValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={styles.container}>
            <h2>Register</h2>
            <FormikInput name="name" type="text" placeholder="Name" />
            <FormikInput name="age" type="number" placeholder="Age" />
            <FormikInput name="email" type="email" placeholder="Email" />
            <FormikInput name="password" type="password" placeholder="Password" />
            <FormikInput name="repeatPassword" type="password" placeholder="Repeat password" />

            {submitError && <span className={styles.error}>{submitError}</span>}
            {isSubmitting ? (
              <Triangle visible={true} height="40" width="40" color="#8056eb" ariaLabel="triangle-loading" />
            ) : (
              <Button animated type="submit">
                Submit
              </Button>
            )}

            <span className={styles.text}>
              Already have and account?{' '}
              <span onClick={() => navigate(routes.LOGIN_PAGE)} className={styles.signUpLink}>
                Log In here!
              </span>
            </span>
          </Form>
        )}
      </Formik>
    </div>
  );
};
