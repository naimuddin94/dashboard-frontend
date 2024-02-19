import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layout/RootLayout';
import SigninPage from '../pages/SigninPage';
import ECommerce from '../pages/Dashboard/ECommerce';
import LeaderForm from '../components/Leader/LeaderForm';
import ManageLeader from '../components/Leader/ManageLeader';
import CustomerForm from '../components/Customer/CustomerForm';
import ManageCustomer from '../components/Customer/ManageCustomer';
import Chart from '../pages/Chart';
import AddCountry from '../components/Country/AddCountry';
import ManageCountry from '../components/Country/ManageCountry';
import AddCategory from '../components/Category/AddCategory';
import ManageCategory from '../components/Category/ManageCategory';
import Settings from '../pages/Settings';
import SignIn from '../pages/Authentication/SignIn';
import SignUp from '../pages/Authentication/SignUp';
import NotFound from '../pages/NotFound';
import PrivateRoute from './PrivateRoute';
import { axiosBase } from '../hooks/useAxiosSecure';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PrivateRoute>
        <RootLayout />
      </PrivateRoute>
    ),
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <ECommerce />,
      },
      {
        path: '/add-leader',
        element: <LeaderForm />,
      },
      {
        path: '/manage-leader',
        element: <ManageLeader />,
      },
      {
        path: '/add-customer',
        element: <CustomerForm />,
      },
      {
        path: 'manage-customers',
        element: <ManageCustomer />,
      },
      {
        path: '/customer-report',
        element: <Chart />,
      },
      {
        path: '/add-country',
        element: <AddCountry />,
      },
      {
        path: '/manage-country',
        element: <ManageCountry />,
        loader: () => axiosBase.get('/country'),
      },
      {
        path: '/add-category',
        element: <AddCategory />,
        loader: () => axiosBase.get('/country'),
      },
      {
        path: '/manage-category',
        element: <ManageCategory />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
      {
        path: '/auth/signin',
        element: <SignIn />,
      },
      {
        path: '/auth/signup',
        element: <SignUp />,
      },
      {
        path: '/webhook-settings',
        element: <Chart />,
      },
    ],
  },
  {
    path: '/signin',
    element: <SigninPage />,
  },
]);

export default router;