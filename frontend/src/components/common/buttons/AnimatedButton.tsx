import styles from './AnimatedButton.module.scss';
import { ReactNode } from 'react';
import { FormEvent } from 'react';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: FormEvent) => Promise<void> | (() => void);
  children?: ReactNode | string;
}

export const AnimatedButton = ({ type, onClick, children, ...props }: ButtonProps) => {
  return (
    <button type={type} className={styles.button} onClick={onClick} {...props}>
      {children}
    </button>
  );
};
