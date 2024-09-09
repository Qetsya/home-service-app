import styles from './MyBookingsCard.module.css';
import moment from 'moment';
import { Loader } from '@/components/common/Loader';
import { useBusinessById } from '@/hooks/businesses';
import { RxPerson } from 'react-icons/rx';
import { SlLocationPin } from 'react-icons/sl';
import { LuCalendar } from 'react-icons/lu';
import { FiClock } from 'react-icons/fi';
import { BusinessModel } from '@/types/BusinessModel';

interface BusinessCardProps {
  businessId: string;
  bookingDate: string;
  bookingTime: string;
}

export const MyBookingsCard = ({ businessId, bookingDate, bookingTime }: BusinessCardProps) => {
  const { data, isLoading, error } = useBusinessById(businessId);
  const business = data ?? ({} as BusinessModel);

  return (
    <>
      {isLoading && (
        <div className="flex justify-center">
          <Loader size="70" />
        </div>
      )}

      {error ? (
        <p>Something went wrong, please reload the page</p>
      ) : (
        <div className={styles.container}>
          <img src={business?.images?.[0].url} className={styles.image} alt="businessPicture" />
          <div className={styles.info}>
            <h3 className={styles.title}>{business.name}</h3>
            <div className={styles.box}>
              <RxPerson className="text-lg text-main-color" />
              <p className={styles.contact}>{business.contactPerson}</p>
            </div>
            <div className={styles.box}>
              <SlLocationPin className="text-xl text-main-color" />
              <p>{business.address}</p>
            </div>
            <div className={styles.box}>
              <LuCalendar className="text-lg text-main-color" />
              <p>
                Service on: <span className={styles.date}>{moment(bookingDate).format('DD-MMM-yyyy')}</span>
              </p>
            </div>
            <div className={styles.box}>
              <FiClock className="text-lg text-main-color" />
              <p>
                Service on: <span className={styles.time}>{bookingTime}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
