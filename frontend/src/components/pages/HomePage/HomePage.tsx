import { Hero } from './Hero';
import { CategoryList } from '@/components/category/CategoryList';
import { BusinessList } from './Business/BusinessList';

import styles from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={styles.rootContainer}>
      <Hero />
      <div className={styles.categoryList}>
        <CategoryList />
      </div>
      <BusinessList />
    </div>
  );
};
