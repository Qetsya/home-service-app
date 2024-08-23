import { RouterProvider } from 'react-router-dom';
import router from './components/Layout/router';
import { UserProvider } from './contexts/UserContext';
import { SnackbarProvider } from 'notistack';

const App = () => {
  return (
    <SnackbarProvider
      autoHideDuration={3000}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </SnackbarProvider>
  );
};

export default App;
