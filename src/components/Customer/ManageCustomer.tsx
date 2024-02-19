import { useLoaderData } from 'react-router-dom';
import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import { ICustomer } from '../../types/types';
import CustomerTable from './CustomerTable';

const ManageCustomer = () => {
  const { data: customers = [] } = useLoaderData() as { data: ICustomer[] };
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
