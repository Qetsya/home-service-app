import styles from './BusinessList.module.scss';
import { useState, useEffect } from 'react';
import { getBusinesses } from '@/services/getBusinesses';
import BusinessCard from './BusinessCard';
import { BusinessModel } from '@/types/BusinessModel';
import { Triangle } from 'react-loader-spinner';

export const BusinessList = () => {
  const [businesses, setBusinesses] = useState<BusinessModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await getBusinesses();
      setBusinesses(data);
    } catch {
      setError('Something went wrong, please reload the page');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) return <div className={styles.error}>{error}</div>;

  return (
    <>
      <h2 className={styles.title}>Popular businesses</h2>

      {loading ? (
        <Triangle
          visible={true}
          height="80"
          width="80"
          color="#8056eb"
          ariaLabel="triangle-loading"
          wrapperClass={styles.loading}
        />
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
