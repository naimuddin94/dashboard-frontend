import { tableData } from '../../fakeData/data';
import DefaultLayout from '../../layout/DefaultLayout';
import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import TableThree from '../Tables/TableThree';

const ManageLeader = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="All Leaders" />

      <div className="flex flex-col gap-10">
        <TableThree data={tableData} />
      </div>
    </DefaultLayout>
  );
};

export default ManageLeader;
