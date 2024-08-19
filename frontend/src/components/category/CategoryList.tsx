import { categories } from '@/consts/category';
import { CategoryCard } from './CategoryCard';

export const CategoryList = () => {
  return (
    <>
      {categories.map((category) => {
        return <CategoryCard category={category} key={category.name} />;
      })}
    </>
  );
};
