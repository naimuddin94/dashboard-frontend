import DefaultLayout from "../../layout/DefaultLayout";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import TableTwo from "../Tables/TableTwo";


const ManageCountry = () => {
    return (
      <DefaultLayout>
        <Breadcrumb pageName="All Country" />

        <div className="flex flex-col gap-10">
          <TableTwo />
        </div>
      </DefaultLayout>
    );
};

export default ManageCountry;