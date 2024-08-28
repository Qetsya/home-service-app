import { ReactNode } from 'react';
import styles from './Avatar.module.scss';
interface Props {
  children?: ReactNode;
}

export const Avatar = ({ children }: Props) => {
  return <div className={styles.avatar}>{children}</div>;
};
