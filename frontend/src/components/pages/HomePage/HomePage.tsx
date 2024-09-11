import styles from './HomePage.module.css';
import { Hero } from './Hero';
import { CategoryList } from '../../Category/CategoryList';
import { BusinessList } from '../../Business/BusinessList';

export const HomePage = () => {
  return (
    <div className={`${styles.rootContainer} sm:p-16`}>
      <Hero />
      <CategoryList />
      <BusinessList />
    </div>
  );
};
