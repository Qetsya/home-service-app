import styles from './Button.module.css';
import classNames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  simple?: boolean;
  rounded?: boolean;
  animated?: boolean;
  cancel?: boolean;
  long?: boolean;
}

export const Button = ({ simple, rounded, animated, cancel, long, ...props }: ButtonProps) => {
  return (
    <button
      className={classNames(
        simple && styles.simple,
        rounded && styles.rounded,
        animated && styles.animated,
        cancel && styles.cancel,
        long && styles.long,
      )}
      {...props}
    >
      {props.children}
    </button>
  );
};
