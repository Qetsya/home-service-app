import { useParams } from 'react-router-dom';
import styles from './BusinessPage.module.scss';

export const BusinessPage: React.FC = () => {
  return (
    <div>
      <div className={styles.gridContainer}>
        <div className={styles.wrapper}>
          <img
            src="https://www.pristinehome.com.au/wp-content/uploads/2020/01/15-Cleaning-Tips-from-Professional-Cleaners-3.jpg"
            className={styles.pageImage}
          />
          <div className={styles.info}>
            <button className={styles.button}>cleaning</button>
            <div className={styles.businessTag}></div>
            <h4>House Cleaning</h4>
            <p>255 Grand Park Ave, New York</p>
            <p>accounts@tubeguruji.com</p>
          </div>
        </div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </div>
  );
};
