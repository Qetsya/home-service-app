import { loginUser } from '@/api/loginUser';
import { registerUser } from '@/api/registerUser';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const REGISTER_USER = 'registerUser';
const LOGIN_USER = 'loginUser';

export const useRegisterUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: registerUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [REGISTER_USER] }),
  });
};

export const useLoginUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [LOGIN_USER] }),
  });
};
