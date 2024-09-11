import styles from './SearchCategoryPage.module.css';
import { useParams } from 'react-router-dom';
import { CategoryList } from '../../Category/CategoryList';
import BusinessCard from '../../Business/BusinessCard';
import { useBusinesses } from '../../../hooks/businesses';
import { Loader } from '../../../components/common/Loader';
import classNames from 'classnames';

export const SearchCategoryPage = () => {
  const { category } = useParams();
  const { data, isLoading, isError } = useBusinesses();
  const businesses = data ?? [];

  return (
    <div className={`${styles.container} p-8 sm:flex-row sm:p-16`}>
      <div className={`${styles.leftSide} sm:flex-1`}>
        <h2 className={classNames(styles.title, styles.categoryTitle)}>Categories</h2>
        <CategoryList />
      </div>
      <div className={`${styles.rightSide} sm:flex-2`}>
        <h2 className={styles.title}>{category}</h2>
        <div className={`${styles.grid} lg:grid-cols-3`}>
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
