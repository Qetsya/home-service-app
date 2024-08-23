import styles from './CategoryList.module.scss';
import { useState, useEffect } from 'react';
import { CategoryCard } from './CategoryCard';
import { CategoryModel } from '@/types/CategoryModel';
import { getCategories } from '@/services/getCategories';
import { Triangle } from 'react-loader-spinner';

export const CategoryList = () => {
  const [categories, setCategories] = useState<CategoryModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await getCategories();
      setCategories(data);
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
    <div className={styles.categoryList}>
      {loading ? (
        <Triangle visible={true} height="80" width="80" color="#8056eb" ariaLabel="triangle-loading" />
      ) : (
        categories.map((category) => {
          return <CategoryCard category={category} key={category._id} />;
        })
      )}
    </div>
  );
};
