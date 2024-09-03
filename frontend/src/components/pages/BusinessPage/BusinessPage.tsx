// import styles from './BusinessPage.module.css';
import { useState } from 'react';
import { Button } from '@/components/common/buttons/Button';
import { SlNote } from 'react-icons/sl';
import { BookingCalendar } from '@/components/BookingCalendar/BookingCalendar';

export const BusinessPage = () => {
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <BookingCalendar onOpen={open} setClose={handleClose} />
      <div className="gridContainer">
        <div className="infoCard">
          <img
            src="https://www.pristinehome.com.au/wp-content/uploads/2020/01/15-Cleaning-Tips-from-Professional-Cleaners-3.jpg"
            className="pageImage"
          />
          <div className="info">
            <div className="button">cleaning</div>
            <div className="businessTag"></div>
            <h3 className="pageTitle">House Cleaning</h3>
            <p className="address">255 Grand Park Ave, New York</p>
            <p className="email">accounts@tubeguruji.com</p>
          </div>
        </div>
        <div className="availableTab">
          <button className="bookingBox">Box</button>
          <p className="avaiName">Jenny Wilson</p>
          <p className="bookings">Available 8:00 AM to 10PM</p>
        </div>
        <div className="descriptionCard">
          <h4 className="descriptionName">Description</h4>
          <div className="descriptionText">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla provident ipsum placeat aspernatur est
            accusamus architecto modi deleniti, ipsa vero voluptatem assumenda beatae vel illo quibusdam facere tenetur
            delectus suscipit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa reiciendis aliquam,
            excepturi enim ad alias quod corrupti quasi nulla blanditiis esse ab provident aliquid accusamus facilis
            quas fuga! Animi, voluptatibus.
          </div>
        </div>
        <div>
          <Button simple long onClick={openModal}>
            <SlNote className="text-2xl" />
            Book Appointment
          </Button>
          <h4 className="bookTitle">Similar Business</h4>
          <div className="simBusiness">
            <div className="simBusinessCard">
              <div className="infoCardBook">
                <img
                  src="https://www.pristinehome.com.au/wp-content/uploads/2020/01/15-Cleaning-Tips-from-Professional-Cleaners-3.jpg"
                  className="pageImageBook"
                />
                <div className="infoBook">
                  <h3 className="pageTitleBook">House Cleaning</h3>
                  <p className="nameBook">Jenny Wilson</p>

                  <p className="addressBook">255 Grand Park Ave, New York</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
