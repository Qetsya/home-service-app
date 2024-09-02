interface BookingTimes {
  time: string;
  isAvailable: boolean;
}

export const availableTimes: BookingTimes[] = [
  { time: '10:00 AM', isAvailable: true },
  { time: '10:30 AM', isAvailable: true },
  { time: '11:00 AM', isAvailable: false },
  { time: '11:30 AM', isAvailable: true },
  { time: '12:00 AM', isAvailable: true },
  { time: '12:30 AM', isAvailable: false },
  { time: '1:00 PM', isAvailable: false },
  { time: '1:30 PM', isAvailable: true },
  { time: '2:00 PM', isAvailable: true },
];
