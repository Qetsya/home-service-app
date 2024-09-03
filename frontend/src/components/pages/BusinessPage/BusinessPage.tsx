// import styles from './BusinessPage.module.css';
import { useState } from 'react';
import { Button } from '@/components/common/buttons/Button';
import { SlNote } from 'react-icons/sl';
import { FiMapPin } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { LuUpload } from 'react-icons/lu';
import { IoPersonOutline } from 'react-icons/io5';
import { BookingCalendar } from '@/components/BookingCalendar/BookingCalendar';

export const BusinessPage = () => {
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <BookingCalendar onOpen={open} setClose={handleClose} />
      <div className="grid grid-cols-[65%,35%] p-2 m-[5rem_5rem] grid-rows-[fit-content(200px) ">
        <div className="flex justify-left gap-7 ;">
          <img
            src="https://www.pristinehome.com.au/wp-content/uploads/2020/01/15-Cleaning-Tips-from-Professional-Cleaners-3.jpg"
            className="h-[150px] w-[150px] rounded-full object-cover ml-10 pl-10;"
          />
          <div className="flex justify-start flex-col items-start gap-20;">
            <div className=" py-1 px-3 rounded-full border-none cursor-pointer text-[#8056eb] bg-[#e5ddfb] text-sm w-20 text-center ;">
              cleaning
            </div>
            <div className="businessTag"></div>
            <h3 className="text-3xl font-roboto flex items-start justify-start my-5 gap-5 font-bold">House Cleaning</h3>
            <p className="text-[#a8a8a8] font-roboto text-xl my-1 flex gap-2">
              <FiMapPin />
              255 Grand Park Ave, New York
            </p>
            <p className="text-[#a8a8a8] font-roboto text-xl my-1 mb-20 flex gap-2 ">
              <HiOutlineMail />
              accounts@tubeguruji.com
            </p>
          </div>
        </div>
        <div className="flex justify-end items-end flex-col gap-4">
          <div className="w-14 h-11 text-white bg-[#8056eb] rounded-lg border-none hover:bg-[#9270e7] cursor-pointer ">
            <LuUpload className="flex align-middle justify-center w-8 h-8 pt-1 ml-3  " />
          </div>
          <p className="text-[#8056eb] font-roboto text-lg flex flex-row align-middle justify-center;">
            <IoPersonOutline className="flex w-4 h-4 m-2" />
            Jenny Wilson
          </p>
          <p className="text-[#a8a8a8] font-roboto text-xl mb-24 ;">Available 8:00 AM to 10PM</p>
        </div>
        <div className="flex font-roboto items-start flex-col gap-5 bg-gradient-to-b from-white to-gray-200 h-full w-full pl-10">
          <h4 className="font-roboto text-2xl font-bold ">Description</h4>
          <div className="text-left text-[#2e2929] font-roboto text-xl tracking-wide leading-relaxed w-11/12;">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla provident ipsum placeat aspernatur est
            accusamus architecto modi deleniti, ipsa vero voluptatem assumenda beatae vel illo quibusdam facere tenetur
            delectus suscipit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa reiciendis aliquam,
            excepturi enim ad alias quod corrupti quasi nulla blanditiis esse ab provident aliquid accusamus facilis
            quas fuga! Animi, voluptatibus.
          </div>
        </div>
        <div className="flex flex-col gap-5  bg-gradient-to-b from-white to-gray-200 h-full w-full pl-5 pt-5 pr-10">
          <Button simple long onClick={openModal}>
            <SlNote className="text-2xl" />
            Book Appointment
          </Button>
          <h4 className="text-left font-roboto font-bold text-l ;">Similar Business</h4>
          <div className="flex justify-start ">
            <div className="">
              <div className="flex gap-5  justify-center items-start text-left ;">
                <img
                  src="https://www.pristinehome.com.au/wp-content/uploads/2020/01/15-Cleaning-Tips-from-Professional-Cleaners-3.jpg"
                  className="w-20 h-28 rounded-2xl object-cover ;"
                />
                <div className="flex flex-col ">
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
