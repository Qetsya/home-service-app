import styles from './MyBookingsPage.module.css';
import { useState } from 'react';
import classNames from 'classnames';
import { useGetBookings } from '@/hooks/booking';
import { MyBookingsCard } from './MyBookingsCard';
import { Button } from '@/components/common/buttons/Button';
import { Loader } from '@/components/common/Loader';
import { useLocalStorage } from '@uidotdev/usehooks';
import { User } from '@/types/User';

export const MyBookingsPage = () => {
  const [user] = useLocalStorage<User>('user');
  const { data, isPending, error } = useGetBookings(user.email);
  const bookings = data?.filter((item) => item.status !== 'completed') ?? [];
  const completedBookings = data?.filter((item) => item.status === 'completed') ?? [];
  const [activeBookedButton, setActiveBookedButton] = useState(true);
  const [activeCompletedButton, setActiveCompletedButton] = useState(false);

  const handleBooked = () => {
    setActiveBookedButton(true);
    setActiveCompletedButton(false);
  };

  const handleCompleted = () => {
    setActiveBookedButton(false);
    setActiveCompletedButton(true);
  };

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
      {isPending && (
        <div className="flex justify-center">
          <Loader size="70" />
        </div>
      )}
      {error && <p>Something went wrong, please reload the page</p>}
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
            {completedBookings?.map((booking) => {
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
