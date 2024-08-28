import Image from '@/assets/page-not-found.webp';
import styles from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
  return (
    <div>
      <img className={styles.notFound} src={Image} alt="page-not-found" />;
    </div>
  );
};
