import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getBusinesses } from '@/api/getBusinesses';
import { getBusinessById } from '@/api/getBusinessById';

const BUSINESS_KEY = 'business';

export const useBusinesses = () => {
  return useQuery({
    queryKey: [BUSINESS_KEY],
    queryFn: getBusinesses,
  });
};

export const useBusinessById = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: getBusinessById,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [BUSINESS_KEY] }),
  });
};
