import { useParams } from 'react-router-dom';
import styles from './BusinessPage.module.scss';

export const BusinessPage: React.FC = () => {
  const { business } = useParams<{ business: string }>();
  return (
    <div>
      <h1 className={styles.title}>Business Page for {business}</h1>
      <div className={styles.gridContainer}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </div>
  );
};
