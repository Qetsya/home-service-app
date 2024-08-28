import { useQuery } from '@tanstack/react-query';
import { getCategories } from '@/api/getCategories';

const CATEGORIES_KEY = 'categories';

export const useCategories = () => {
  return useQuery({
    queryKey: [CATEGORIES_KEY],
    queryFn: getCategories,
  });
};
