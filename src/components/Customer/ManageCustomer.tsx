import { tableData } from '../../fakeData/data';
import DefaultLayout from '../../layout/DefaultLayout';
import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import TableThree from '../Tables/TableThree';

const ManageCustomer = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="All Customer" />

      <div className="flex flex-col gap-10">
        <TableThree data={tableData} customerTable={true} />
      </div>
    </DefaultLayout>
  );
};

export default ManageCustomer;
