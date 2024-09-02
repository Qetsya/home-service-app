import { useEffect, useState } from 'react';
import { useCreateBooking } from '@/hooks/booking';
import { Datepicker, Drawer } from 'flowbite-react';
import { IoClose } from 'react-icons/io5';
import { Button } from '../common/buttons/Button';
import { BookingModel } from '@/types/BookingModel';
import { enqueueSnackbar } from 'notistack';
import { calendarTheme } from './calendarTheme';
import { TimePicker } from './TimePicker';

interface Props {
  onOpen: boolean;
  setClose: () => void;
}

export const BookingCalendar = ({ onOpen, setClose }: Props) => {
  const { mutateAsync: createBooking } = useCreateBooking();
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [submitError, setSubmitError] = useState('');

  const handleClose = () => {
    setIsOpen(false);
    setClose();
  };

  const handleDate = (value: Date) => setDate(value.toDateString());

  const getMaxDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = new Date(year, month, 0).getDate();
    return new Date(year, month - 1, day);
  };

  const getTime = (time: string) => setTime(time);

  const bookAppointment = async () => {
    const booking: BookingModel = {
      businessId: '',
      date: date,
      time: time,
      userEmail: '',
      userName: '',
      status: 'pending',
    };
    try {
      const response = await createBooking(booking);
      enqueueSnackbar('Appointment booked!');
      setIsOpen(false);
      console.log(response);
    } catch {
      setSubmitError('Something went wrong. Please try again');
    }
  };

  useEffect(() => {
    if (onOpen) setIsOpen(true);
  }, [onOpen]);

  return (
    <Drawer open={isOpen} onClose={handleClose} position="right" className="w-96 text-left p-8 ">
      <Drawer.Items>
        <div className="flex justify-between">
          <h3 className="text-xl font-bold mt-1">Book on Service</h3>
          <IoClose onClick={handleClose} color="grey" />
        </div>
        <p className="mt-2 text-base text-gray-500">Select date and Time slot to book on service</p>
        <p className="my-4 font-semibold text-gray-600 ">Select Date</p>
        <Datepicker
          onSelectedDateChanged={handleDate}
          theme={calendarTheme}
          inline
          weekStart={0}
          minDate={new Date()}
          maxDate={getMaxDate()}
          showClearButton={false}
          showTodayButton={false}
          defaultDate={new Date()}
        />
      </Drawer.Items>

      <Drawer.Items>
        <TimePicker bookTime={getTime} />
      </Drawer.Items>
      <Drawer.Items>
        {submitError && <p className="text-red-700 mb-3">{submitError}</p>}
        <div className="flex gap-5 justify-center">
          <Button simple onClick={bookAppointment}>
            Book
          </Button>
          <Button simple cancel onClick={handleClose}>
            Discard
          </Button>
        </div>
      </Drawer.Items>
    </Drawer>
  );
};
