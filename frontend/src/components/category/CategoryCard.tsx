import styles from './CategoryCard.module.scss';
import { generatePath, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { CategoryModel } from '@/types/CategoryModel';

import classNames from 'classnames';
import routes from '@/consts/routes';

interface CategoryProps {
  category: CategoryModel;
}

export const CategoryCard = ({ category }: CategoryProps) => {
  const { name, url, color } = category;
  const navigate = useNavigate();
  const params = useParams();

  const categoryPath = generatePath(routes.SEARCH_CATEGORY, { category: name });
  const activeCategory = params.category;

  return (
    <div
      className={classNames(
        styles.card,
        activeCategory && styles.cardVertical,
        activeCategory === name && styles.activeCard,
      )}
      onClick={() => navigate(categoryPath)}
    >
      <div
        className={styles.icon}
        style={{
          maskImage: `url(${url})`,
          WebkitMaskImage: `url(${url})`,
          width: '48px',
          height: '48px',
          backgroundColor: color,
        }}
      ></div>

      <span className={styles.title}>{name}</span>
    </div>
  );
};
