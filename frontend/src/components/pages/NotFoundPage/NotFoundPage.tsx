import styles from './NotFoundPage.module.scss';
import Image from '@/assets/page-not-found.webp';

export const NotFoundPage = () => {
  return (
    <div>
      <img className={styles.notFound} src={Image} alt="page-not-found" />;
    </div>
  );
};
