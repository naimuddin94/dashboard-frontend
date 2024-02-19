import { useLoaderData } from 'react-router-dom';
import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import TableTwo from '../Tables/TableTwo';
import { ICountries } from '../../types/types';

const ManageCountry = () => {
  const { data: countries = [] } = useLoaderData() as { data: ICountries[] };
  return (
    <>
      <Breadcrumb pageName="All Country" />

      <div className="flex flex-col gap-10">
        <TableTwo countries={countries} />
      </div>
    </>
  );
};

export default ManageCountry;
