import { createBrowserRouter } from 'react-router-dom';
import routes from '../../consts/routes';

import { Layout } from '@/components/Layout/Layout';
import { HomePage } from '@/components/pages/HomePage/HomePage';
import { ServicesPage } from '@/components/pages/ServicesPage/ServicesPage';
import { AboutUsPage } from '@/components/pages/AboutUsPage/AboutUsPage';
import { LoginPage } from '../pages/Login, RegisterPages/LoginPage';
import { RegisterPage } from '../pages/Login, RegisterPages/RegisterPage';
import { SearchCategoryPage } from '../pages/SearchCategoryPage/SearchCategoryPage';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
import { BusinessPage } from '../pages/BusinessPage/BusinessPage';
import { MyBookingsPage } from '../pages/MyBookingsPage/MyBookingsPage';

const router = createBrowserRouter([
  {
    path: routes.HOME,
    element: <Layout />,
    children: [
      {
        path: routes.HOME,
        element: <HomePage />,
      },
      {
        path: routes.SERVICES,
        element: <ServicesPage />,
      },
      {
        path: routes.ABOUT_US,
        element: <AboutUsPage />,
      },
      {
        path: routes.LOGIN_PAGE,
        element: <LoginPage />,
      },
      {
        path: routes.REGISTER_PAGE,
        element: <RegisterPage />,
      },
      {
        path: routes.SEARCH_CATEGORY,
        element: <SearchCategoryPage />,
      },
      {
        path: routes.BUSINESS_PAGE,
        element: <BusinessPage />,
      },
      {
        path: routes.MY_BOOKINGS_PAGE,
        element: <MyBookingsPage />,
      },
      {
        path: routes.NOT_FOUND,
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
