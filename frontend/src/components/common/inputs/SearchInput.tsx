import styles from './SearchInput.module.scss';

export const SearchInput = ({ ...props }) => {
  return <input type="text" className={styles.input} placeholder="Search" {...props} />;
};
