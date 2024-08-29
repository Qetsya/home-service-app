import { useParams } from 'react-router-dom';
import styles from './BusinessPage.module.scss';

export const BusinessPage: React.FC = () => {
  //   const { business } = useParams<{ business: string }>();
  return (
    <div>
      {/* <h1 className={styles.title}>Business Page for {business}</h1> */}
      <div className={styles.gridContainer}>
        <div>
          <img
            src="https://images.squarespace-cdn.com/content/v1/58c9f49846c3c4a643f3ed82/1616085191669-33U8F12I0QY74ORHGYAZ/What+Should+A+Cleaning+Lady+Do%3F"
            className={styles.pageImage}
          />
          <div className={styles.info}>
            <div className={styles.businessTag}></div>
            <h4>House Cleaning</h4>
            <p>Address</p>
            <p>email</p>
          </div>
        </div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </div>
  );
};
