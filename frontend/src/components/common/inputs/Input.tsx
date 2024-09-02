import styles from './Input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ ...props }: InputProps) => {
  return (
    <div className={styles.inputBox}>
      <input
        {...props}
        className={`${styles.input} 
      bg-transparent
       border-b-2 
       focus:ring-0 
       focus:border-main-color
       `}
      />
    </div>
  );
};
