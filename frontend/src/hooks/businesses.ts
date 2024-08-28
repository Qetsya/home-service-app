import { useQuery } from '@tanstack/react-query';
import { getBusinesses } from '@/api/getBusinesses';

const BUSINESS_KEY = 'business';

export const useBusinesses = () => {
  return useQuery({
    queryKey: [BUSINESS_KEY],
    queryFn: getBusinesses,
  });
};
