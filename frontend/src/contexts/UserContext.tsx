import { createContext, PropsWithChildren } from 'react';
import { useLocalStorage } from '@uidotdev/usehooks';
import { User, UserResponse } from '@/types/User';

interface UserContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (user: UserResponse) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | null>({
  user: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useLocalStorage<User | null>('user', null);
  const [, setToken] = useLocalStorage<string | null>('token', null);

  const isLoggedIn = !!user;

  const login = (user: UserResponse) => {
    setUser(user.user);
    setToken(user.token);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  return <UserContext.Provider value={{ user, login, logout, isLoggedIn }}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
