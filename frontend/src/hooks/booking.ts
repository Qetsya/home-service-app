import { createBooking } from '@/api/createBooking';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const BOOKING = 'booking';

export const useCreateBooking = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createBooking,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [BOOKING] }),
  });
};
