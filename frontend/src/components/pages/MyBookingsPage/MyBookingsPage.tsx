import styles from './MyBookingsPage.module.css';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useGetBookings } from '@/hooks/booking';
import { MyBookingsCard } from './MyBookingsCard';
import { BookingModel } from '@/types/BookingModel';
import { Button } from '@/components/common/buttons/Button';
import { Loader } from '@/components/common/Loader';
import { useLocalStorage } from '@uidotdev/usehooks';
import { User } from '@/types/User';

export const MyBookingsPage = () => {
  const { mutateAsync: getBookings } = useGetBookings();
  const [user] = useLocalStorage<User>('user');
  const [bookings, setBookings] = useState<BookingModel[]>([]);
  const [completedBookings, setCompletedBookings] = useState<BookingModel[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeBookedButton, setActiveBookedButton] = useState(true);
  const [activeCompletedButton, setActiveCompletedButton] = useState(false);

  const fetchBookings = async () => {
    setError('');
    setLoading(true);
    try {
      const response = await getBookings(user.email);
      if (response.length > 0) {
        const booked = response.filter((item) => item.status !== 'completed');
        setBookings(booked);
        const completed = response.filter((item) => item.status === 'completed');
        setCompletedBookings(completed);
      } else {
        setError('You have no booked services yet!');
      }
    } catch {
      setError('Something went wrong, please reload the page');
    }
    setLoading(false);
  };

  const handleBooked = () => {
    setActiveBookedButton(true);
    setActiveCompletedButton(false);
  };

  const handleCompleted = () => {
    setActiveBookedButton(false);
    setActiveCompletedButton(true);
  };

  useEffect(() => {
    fetchBookings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`${styles.container} md:p-16`}>
      <h2 className={styles.title}>My Bookings</h2>
      <div className={styles.panel}>
        <Button
          onClick={handleBooked}
          className={classNames(`
                        ${styles.panelButton}
                        ${activeBookedButton ? styles.activeButton : ''}`)}
        >
          Booked
        </Button>

        <Button
          onClick={handleCompleted}
          className={classNames(`
            ${styles.panelButton} 
            ${activeCompletedButton ? styles.activeButton : ''}
`)}
        >
          Completed
        </Button>
      </div>
      {loading && (
        <div className="flex justify-center">
          <Loader size="70" />
        </div>
      )}
      {error && <p>{error}</p>}
      <div className=" grid gap-1 sm:grid-cols-2 sm:gap-4">
        {activeBookedButton && (
          <>
            {bookings.map((booking) => {
              if (!booking.businessId) return;
              return (
                <div className={styles.bookingContainer} key={booking.businessId}>
                  <MyBookingsCard
                    businessId={booking.businessId}
                    bookingDate={booking.date}
                    bookingTime={booking.time}
                  />
                </div>
              );
            })}
          </>
        )}
        {activeCompletedButton && (
          <>
            {completedBookings.map((booking) => {
              if (!booking.businessId) return;
              return (
                <div className={styles.bookingContainer} key={booking.businessId}>
                  <MyBookingsCard
                    businessId={booking.businessId}
                    bookingDate={booking.date}
                    bookingTime={booking.time}
                  />
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};
