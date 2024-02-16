import { tableData } from '../../fakeData/data';
import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import TableThree from '../Tables/TableThree';

const ManageLeader = () => {
  return (
    <>
      <Breadcrumb pageName="All Leaders" />

      <div className="flex flex-col gap-10">
        <TableThree data={tableData} />
      </div>
    </>
  );
};

export default ManageLeader;
