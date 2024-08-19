import { createContext, PropsWithChildren } from 'react';
import { useLocalStorage } from '@uidotdev/usehooks';

interface UserProps {
  email: string;
  password: string;
}

interface UserContextType {
  user: UserProps | null;
  isLoggedIn: boolean;
  login: (user: UserProps) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | null>({
  user: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useLocalStorage<UserProps | null>('user', null);

  const isLoggedIn = !!user;

  const login = (user: UserProps) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return <UserContext.Provider value={{ user, login, logout, isLoggedIn }}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
