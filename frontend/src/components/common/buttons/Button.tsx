import styles from './Button.module.scss';
import classNames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  simple?: boolean;
  rounded?: boolean;
  animated?: boolean;
  cancel?: boolean;
}

export const Button = ({ simple, rounded, animated, cancel, ...props }: ButtonProps) => {
  return (
    <button
      className={classNames(
        simple && styles.simple,
        rounded && styles.rounded,
        animated && styles.animated,
        cancel && styles.cancel,
      )}
      {...props}
    >
      {props.children}
    </button>
  );
};
