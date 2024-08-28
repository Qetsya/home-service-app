import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import router from './components/Layout/router';
import { UserProvider } from './contexts/UserContext';
import { SnackbarProvider } from 'notistack';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
};

export default App;
