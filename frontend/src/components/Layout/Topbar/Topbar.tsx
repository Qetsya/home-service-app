import { useContext } from "react";
import { UserContext } from "@/contexts/UserContext.js";
import { useNavigate, Link } from "react-router-dom";
import routes from "@/consts/routes.js";

import logo from "@/assets/logo/logo-Baau9ypC.webp";
import styles from "./Topbar.module.scss";

import { Button } from "../../common/Button.js";
import { Avatar } from "@/components/common/Avatar.js";

const Topbar = () => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  const links = [
    {
      href: routes.HOME,
      label: "Home",
    },
    {
      href: routes.SERVICES,
      label: "Services",
    },
    {
      href: routes.ABOUT_US,
      label: "About Us",
    },
  ];

  return (
    <div className={styles.topbar}>
      <div className={styles.leftSide}>
        <div className={styles.imageBox}>
          <Link to={routes.HOME}>
            <img src={logo} className={styles.image} alt="logo" />
          </Link>
        </div>
        <ul className={styles.navigation}>
          {links.map((link) => {
            return (
              <li key={link.label}>
                <Link to={link.href} className={styles.link}>
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      {userContext?.user ? (
        <div className={styles.rightSide}>
          <Avatar>{userContext?.user?.email[0]}</Avatar>
          <Button onClick={() => userContext?.logout()}>Log out</Button>
        </div>
      ) : (
        <Button onClick={() => navigate(routes.LOGIN_PAGE)}>
          Login / Sign Up
        </Button>
      )}
    </div>
  );
};

export default Topbar;
