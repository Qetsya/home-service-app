import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/components/Layout/Layout';
import AboutUsPage from '@/components/pages/AboutUsPage/AboutUsPage';
import { HomePage } from '@/components/pages/HomePage/HomePage';
import { LoginPage } from '@/components/pages/LoginPage/LoginPage';
import ServicesPage from '@/components/pages/ServicesPage/ServicesPage';

import routes from '../../consts/routes';
import { SearchCategoryPage } from '@/components/pages/SearchCategoryPage/SerachCategoryPage';

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
        path: routes.SEARCH_CATEGORY,
        element: <SearchCategoryPage />,
      },
    ],
  },
]);

export default router;
