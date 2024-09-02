import styles from './CategoryList.module.css';
import { CategoryCard } from './CategoryCard';
import { useCategories } from '@/hooks/categories';
import { Loader } from '../common/Loader';

export const CategoryList = () => {
  const { data, isLoading, isError } = useCategories();
  const categories = data ?? [];

  if (isError) return <div className={styles.error}>Something went wrong, please reload the page</div>;

  return (
    <div className={styles.categoryList}>
      {isLoading ? (
        <Loader size="80" />
      ) : (
        categories.map((category) => {
          return <CategoryCard category={category} key={category._id} />;
        })
      )}
    </div>
  );
};
