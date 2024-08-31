import styles from './Avatar.module.scss';
import { ReactNode, useContext } from 'react';
import { Dropdown } from 'flowbite-react';
import { UserContext } from '@/contexts/UserContext';

interface Props {
  children?: ReactNode;
}

export const Avatar = ({ children }: Props) => {
  const userContext = useContext(UserContext);

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
        <Dropdown.Item>My Bookings</Dropdown.Item>
        <Dropdown.Item onClick={() => userContext?.logout()}>Logout</Dropdown.Item>
      </Dropdown>
    </div>
  );
};
