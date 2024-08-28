import { Outlet } from 'react-router-dom';

import Topbar from '../Layout/Topbar/Topbar';

export const Layout = () => {
  return (
    <>
      <Topbar />
      <Outlet />
    </>
  );
};
