import { createBooking } from '@/api/createBooking';
import { getBookings } from '@/api/getBookings';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const BOOKING = 'booking';
const GET_BOOKINGS = 'getBookings';
// const CATEGORIES_KEY = 'categories';

export const useCreateBooking = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createBooking,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [BOOKING] }),
  });
};

export const useGetBookings = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: getBookings,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [GET_BOOKINGS] }),
  });
};

// export const useCategories = () => {
//   return useQuery({
//     queryKey: [CATEGORIES_KEY],
//     queryFn: getCategories,
//   });
// };
