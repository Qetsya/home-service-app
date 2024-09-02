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
        <div className={styles.descriptionCard}>
          <h4 className={styles.descriptionName}>Description</h4>
          <div className={styles.descriptionText}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla provident ipsum placeat aspernatur est
            accusamus architecto modi deleniti, ipsa vero voluptatem assumenda beatae vel illo quibusdam facere tenetur
            delectus suscipit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa reiciendis aliquam,
            excepturi enim ad alias quod corrupti quasi nulla blanditiis esse ab provident aliquid accusamus facilis
            quas fuga! Animi, voluptatibus.
          </div>
        </div>
        <div>4</div>
      </div>
    </div>
  );
};
