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
      <div className="grid grid-cols-[60%,40%]  gap-2 p-2 m-[5rem_5rem] grid-rows-[fit-content(200px)] w-4/5;">
        <div className="flex justify-left gap-7 ;">
          <img
            src="https://www.pristinehome.com.au/wp-content/uploads/2020/01/15-Cleaning-Tips-from-Professional-Cleaners-3.jpg"
            className="h-[150px] w-[150px] rounded-full object-cover;"
          />
          <div className="flex justify-start flex-col items-start gap-10;">
            <div className=" py-1 px-3 rounded-full border-none cursor-pointer text-[#8056eb] bg-[#e5ddfb] text-sm w-20 text-center;">
              cleaning
            </div>
            <div className="businessTag"></div>
            <h3 className="text-3xl font-roboto flex items-start justify-start gap-[80px] my-4;">House Cleaning</h3>
            <p className="text-[#a8a8a8] font-roboto text-xl my-1">255 Grand Park Ave, New York</p>
            <p className="text-[#a8a8a8] font-roboto text-xl my-1">accounts@tubeguruji.com</p>
          </div>
        </div>
        <div className="flex justify-end items-end flex-col gap-4">
          <button className="w-14 h-11 text-white bg-[#8056eb] rounded-lg border-none hover:bg-[#9270e7] cursor-pointer">
            Box
          </button>
          <p className="text-[#8056eb] font-roboto text-lg;">Jenny Wilson</p>
          <p className="text-[#a8a8a8] font-roboto text-xl my-1;">Available 8:00 AM to 10PM</p>
        </div>
        <div className="flex font-roboto items-start flex-col">
          <h4 className="font-roboto text-xl font-bold ">Description</h4>
          <div className="text-left text-[#2e2929] font-roboto text-xl tracking-wide leading-relaxed w-11/12;">
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
          <h4 className="text-left font-roboto text-xl;">Similar Business</h4>
          <div className="simBusiness">
            <div className="simBusinessCard">
              <div className="flex justify-center items-start text-left gap-4;">
                <img
                  src="https://www.pristinehome.com.au/wp-content/uploads/2020/01/15-Cleaning-Tips-from-Professional-Cleaners-3.jpg"
                  className="w-20 h-25 object-cover rounded-md;"
                />
                <div className="infoBook">
                  <h3 className="font-roboto text-xs;">House Cleaning</h3>
                  <p
                    className="font-roboto text-xs;
}"
                  >
                    Jenny Wilson
                  </p>

                  <p
                    className="font-roboto text-xs;
}"
                  >
                    255 Grand Park Ave, New York
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
