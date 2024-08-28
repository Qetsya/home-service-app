import styles from './Input.module.scss';
import { Field, ErrorMessage } from 'formik';
import { Input } from './Input';

interface FormikInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export const FormikInput = ({ name, ...props }: FormikInputProps) => {
  return (
    <>
      <Field name={name} as={Input} {...props} />
      <ErrorMessage name={name} component="p" className={styles.error} />
    </>
  );
};
