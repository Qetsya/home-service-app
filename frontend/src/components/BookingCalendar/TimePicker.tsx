import { SyntheticEvent, useState } from 'react';
import { availableTimes } from './availableTimes';

interface TimePickerProps {
  bookTime: (time: string) => void;
}

export const TimePicker = ({ bookTime }: TimePickerProps) => {
  const [, setTime] = useState('');

  const getTimePickerId = (time: string) => 'time' + time.replace(':', '-').replace(' ', '-');

  const handleTime = (value: SyntheticEvent<HTMLLabelElement, MouseEvent>) => {
    const time = value.currentTarget.innerText;
    setTime(time);
    bookTime(time);
  };

  return (
    <>
      <p className="my-4 font-semibold text-gray-600 ">Select Time Slot</p>
      <ul className="grid w-full grid-cols-3 gap-2 mb-5">
        {availableTimes.map((time, index) => {
          return (
            <li key={index}>
              <input
                id={getTimePickerId(time.time)}
                type="radio"
                value={time.time}
                disabled={!time.isAvailable}
                className="hidden peer"
                name="time"
              />
              <label
                htmlFor={getTimePickerId(time.time)}
                onClick={handleTime}
                className={`
                inline-flex items-center justify-center w-full px-2 py-2 text-sm
                 font-medium text-center bg-white border 
                 rounded-3xl cursor-pointer text-gray-500
                  border-gray-200 
                  peer-checked:bg-gray-500
                  peer-checked:text-white
                  ${!time.isAvailable ? 'peer-disabled:opacity-50' : 'hover:bg-gray-50 hover:text-gray-900'}`}
              >
                {time.time}
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
};
