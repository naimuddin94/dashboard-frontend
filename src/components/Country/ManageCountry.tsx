import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import TableTwo from '../Tables/TableTwo';

const ManageCountry = () => {
  return (
    <>
      <Breadcrumb pageName="All Country" />

      <div className="flex flex-col gap-10">
        <TableTwo />
      </div>
    </>
  );
};

export default ManageCountry;
