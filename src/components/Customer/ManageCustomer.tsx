import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import CustomerTable from './CustomerTable';
import useCustomers from '../../hooks/useCustomers';

const ManageCustomer = () => {
  const { customers } = useCustomers();
  return (
    <>
      <Breadcrumb pageName="All Customer" />

      <div className="flex flex-col gap-10">
        <CustomerTable customers={customers} />
      </div>
    </>
  );
};

export default ManageCustomer;
