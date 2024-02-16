import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import LeaderForm from './components/Leader/LeaderForm';
import ManageLeader from './components/Leader/ManageLeader';
import CustomerForm from './components/Customer/CustomerForm';
import ManageCustomer from './components/Customer/ManageCustomer';
import AddCountry from './components/Country/AddCountry';
import ManageCountry from './components/Country/ManageCountry';
import AddCategory from './components/Category/AddCategory';
import ManageCategory from './components/Category/ManageCategory';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <ECommerce />
            </>
          }
        />
        <Route
          path="/calendar"
          element={
            <>
              <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Calendar />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Profile />
            </>
          }
        />
        <Route
          path="/add-leader"
          element={
            <>
              <PageTitle title="Dashboard | Add Leader" />
              <LeaderForm />
            </>
          }
        />

        <Route
          path="/manage-leader"
          element={
            <>
              <PageTitle title="Dashboard | Manage Leader" />
              <ManageLeader />
            </>
          }
        />

        <Route
          path="/add-customer"
          element={
            <>
              <PageTitle title="Dashboard | Add Customer" />
              <CustomerForm />
            </>
          }
        />
        <Route
          path="/manage-customers"
          element={
            <>
              <PageTitle title="Dashboard | Manage Customer" />
              <ManageCustomer />
            </>
          }
        />
        <Route
          path="/add-country"
          element={
            <>
              <PageTitle title="Dashboard | Add Country" />
              <AddCountry />
            </>
          }
        />
        <Route
          path="/manage-country"
          element={
            <>
              <PageTitle title="Dashboard | Manage Country" />
              <ManageCountry />
            </>
          }
        />

        <Route
          path="/add-category"
          element={
            <>
              <PageTitle title="Dashboard | Add Category" />
              <AddCategory />
            </>
          }
        />
        <Route
          path="/manage-category"
          element={
            <>
              <PageTitle title="Dashboard | Manage Category" />
              <ManageCategory />
            </>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <>
              <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormLayout />
            </>
          }
        />
        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Tables />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Settings />
            </>
          }
        />
        <Route
          path="/chart"
          element={
            <>
              <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Chart />
            </>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Alerts />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Buttons />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignUp />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
