import styles from './Input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ ...props }: InputProps) => {
  return (
    <div className={styles.inputBox}>
      <input {...props} className={styles.input} />
    </div>
  );
};
