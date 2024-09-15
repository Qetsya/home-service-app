import styles from './HomePage.module.css';
import { Hero } from './Hero';
import { CategoryList } from '@/components/Category/CategoryList';
import { BusinessList } from '@/components/Business/BusinessList';

export const HomePage = () => {
  return (
    <div className={`${styles.rootContainer} sm:p-16`}>
      <Hero />
      <CategoryList />
      <BusinessList />
    </div>
  );
};
