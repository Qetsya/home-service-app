import styles from "./Button.module.scss";
import classNames from "classnames";
import { ReactNode } from "react";

interface ButtonProps {
  rounded?: boolean;
  onClick?: () => void;
  children?: ReactNode | string;
}

export const Button = ({
  rounded,
  onClick,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classNames(styles.button, rounded && styles.rounded)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
