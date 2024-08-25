import styles from './Input.module.scss';
import { ChangeEvent } from 'react';

interface InputProps {
  type: 'text' | 'number' | 'email' | 'password';
  min?: string;
  max?: string;
  value: string | number;
  name?: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  onBlur?: () => void;
}

export const Input = ({ name, type, min, max, value, placeholder, onChange, onBlur }: InputProps) => {
  return (
    <div className={styles.inputBox}>
      <input
        name={name}
        className={styles.input}
        type={type}
        min={min}
        max={max}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required
        onBlur={onBlur}
      />
    </div>
  );
};
