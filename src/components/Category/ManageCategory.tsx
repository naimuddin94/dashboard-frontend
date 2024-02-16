import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import TableOne from '../Tables/TableOne';

const ManageCategory = () => {
  return (
    <>
      <Breadcrumb pageName="All Categories" />
      <div className="flex flex-col gap-10">
        <TableOne />
      </div>
    </>
  );
};

export default ManageCategory;
