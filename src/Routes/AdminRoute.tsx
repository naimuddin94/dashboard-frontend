import { Navigate } from 'react-router-dom';
import useAuthInfo from '../hooks/useAuthInfo';
import { ReactNode } from 'react';
import Loader from '../common/Loader';

interface IPrivateRouteProps {
  children: ReactNode;
}

const AdminRoute = ({ children }: IPrivateRouteProps) => {
  const { roleLoading, loading, role } = useAuthInfo();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <Loader />
      </div>
    );
  }

  if (roleLoading) {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <Loader />
      </div>
    );
  }

  if (role === 'admin') {
    return children;
  }
  return <Navigate to="/signin"></Navigate>;
};

export default AdminRoute;
