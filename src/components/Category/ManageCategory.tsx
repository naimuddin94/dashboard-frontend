import DefaultLayout from '../../layout/DefaultLayout';
import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import TableOne from '../Tables/TableOne';

const ManageCategory = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="All Categories" />
      <div className="flex flex-col gap-10">
        <TableOne />
      </div>
    </DefaultLayout>
  );
};

export default ManageCategory;
