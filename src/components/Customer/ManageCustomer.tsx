import { tableData } from '../../fakeData/data';
import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import TableThree from '../Tables/TableThree';

const ManageCustomer = () => {
  return (
    <>
      <Breadcrumb pageName="All Customer" />

      <div className="flex flex-col gap-10">
        <TableThree data={tableData} customerTable={true} />
      </div>
    </>
  );
};

export default ManageCustomer;
