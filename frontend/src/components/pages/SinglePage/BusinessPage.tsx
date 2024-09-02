import { useParams } from 'react-router-dom';
import styles from './BusinessPage.module.scss';
import { Fa } from 'react-icons/fa';

export const BusinessPage: React.FC = () => {
  return (
    <div>
      <div className={styles.gridContainer}>
        <div className={styles.infoCard}>
          <img
            src="https://www.pristinehome.com.au/wp-content/uploads/2020/01/15-Cleaning-Tips-from-Professional-Cleaners-3.jpg"
            className={styles.pageImage}
          />
          <div className={styles.info}>
            <div className={styles.button}>cleaning</div>
            <div className={styles.businessTag}></div>
            <h3 className={styles.pageTitle}>House Cleaning</h3>
            <p className={styles.address}>255 Grand Park Ave, New York</p>
            <p className={styles.email}>accounts@tubeguruji.com</p>
          </div>
        </div>
        <div className={styles.availableTab}>
          <button className={styles.bookingBox}>Box</button>
          <p className={styles.avaiName}>Jenny Wilson</p>
          <p className={styles.bookings}>Available 8:00 AM to 10PM</p>
        </div>
        <div>3</div>
        <div>4</div>
      </div>
    </div>
  );
};
