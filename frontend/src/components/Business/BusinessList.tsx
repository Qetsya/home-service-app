import styles from './BusinessList.module.scss';
import BusinessCard from './BusinessCard';
import { Loader } from '../common/Loader';
import { useBusinesses } from '@/hooks/businesses';

export const BusinessList = () => {
  const { data, isLoading, isError } = useBusinesses();
  const businesses = data ?? [];

  if (isError) return <div className={styles.error}>Something went wrong, please reload the page</div>;

  return (
    <>
      <h2 className={styles.title}>Popular businesses</h2>

      {isLoading ? (
        <Loader size="80" wrapperClass={styles.loading} />
      ) : (
        <div className={styles.list}>
          {businesses.map((business) => {
            return <BusinessCard business={business} key={business._id} />;
          })}
        </div>
      )}
    </>
  );
};
