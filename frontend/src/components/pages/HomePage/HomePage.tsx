import styles from './HomePage.module.scss';
import { Hero } from './Hero';
import { CategoryList } from '@/components/Category/CategoryList';
import { BusinessList } from '../../Business/BusinessList';

export const HomePage = () => {
  return (
    <div className={styles.rootContainer}>
      <Hero />
      <CategoryList />
      <BusinessList />
    </div>
  );
};
