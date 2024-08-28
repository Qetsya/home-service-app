import styles from './SearchCategoryPage.module.scss';
import { useParams } from 'react-router-dom';
import { CategoryList } from '@/components/Category/CategoryList';
import BusinessCard from '../../Business/BusinessCard';
import { useBusinesses } from '@/hooks/businesses';
import { Loader } from '@/components/common/Loader';
import classNames from 'classnames';

export const SearchCategoryPage = () => {
  const { category } = useParams();
  const { data, isLoading, isError } = useBusinesses();
  const businesses = data ?? [];

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <h2 className={classNames(styles.title, styles.categoryTitle)}>Categories</h2>
        <CategoryList />
      </div>
      <div className={styles.rightSide}>
        <h2 className={styles.title}>Cleaning</h2>
        <div className={styles.grid}>
          {isError && 'Something went wrong'}
          {isLoading ? (
            <Loader size="60" />
          ) : (
            businesses.map((business) => {
              if (business.category === category) {
                return <BusinessCard business={business} key={business._id} />;
              }
            })
          )}
        </div>
      </div>
    </div>
  );
};
