import styles from './Input.module.scss';
import { ChangeEvent } from 'react';

interface InputProps {
  type: 'text' | 'number' | 'email' | 'password';
  min?: string;
  max?: string;
  value: string | number;
  name?: string;
  placeholder: string;
  error?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  onBlur?: () => void;
}

export const Input = ({ type, min, max, value, placeholder, error, onChange, onBlur }: InputProps) => {
  return (
    <div className={styles.inputBox}>
      <input
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
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};
