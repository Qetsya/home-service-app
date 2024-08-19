import { useParams } from 'react-router-dom';
import { CategoryList } from '@/components/category/CategoryList';
import BusinessCard from '../HomePage/Business/BusinessCard';
import classNames from 'classnames';
import styles from './SearchCategoryPage.module.scss';
import { businesses } from '@/consts/business';

export const SearchCategoryPage = () => {
  const { category } = useParams();

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <h2 className={classNames(styles.title, styles.categoryTitle)}>Categories</h2>
        <div>
          <CategoryList />
        </div>
      </div>
      <div className={styles.rightSide}>
        <h2 className={styles.title}>Cleaning</h2>
        <div className={styles.grid}>
          {businesses.map((business) => {
            if (business.category === category) {
              return <BusinessCard business={business} key={business.name} />;
            }
          })}
        </div>
      </div>
    </div>
  );
};
