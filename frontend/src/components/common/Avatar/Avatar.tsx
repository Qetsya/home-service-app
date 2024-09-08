import styles from './Avatar.module.css';
import { ReactNode, useContext } from 'react';
import { Dropdown } from 'flowbite-react';
import { UserContext } from '@/contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import routes from '@/consts/routes';
interface Props {
  children?: ReactNode;
}

export const Avatar = ({ children }: Props) => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  const logout = () => {
    userContext?.logout();
    navigate(routes.HOME);
  };

  return (
    <div className={styles.container}>
      <Dropdown
        className="w-36 "
        label=""
        dismissOnClick={false}
        renderTrigger={() => <div className={styles.avatar}>{children}</div>}
      >
        <Dropdown.Item>
          <strong>My account</strong>
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={() => navigate(routes.MY_BOOKINGS_PAGE)}>My Bookings</Dropdown.Item>
        <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
      </Dropdown>
    </div>
  );
};
