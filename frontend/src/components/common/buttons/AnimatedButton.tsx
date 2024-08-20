import styles from './AnimatedButton.module.scss';
import { ReactNode } from 'react';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  children?: ReactNode | string;
}

export const AnimatedButton = ({ type, onClick, children, ...props }: ButtonProps) => {
  return (
    <button type={type} className={styles.button} onClick={onClick} {...props}>
      {children}
    </button>
  );
};
