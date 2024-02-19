import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import TableTwo from '../Tables/TableTwo';
import { ICountries } from '../../types/types';
import useCountries from '../../hooks/useCountries';

const ManageCountry = () => {
  const { countries } = useCountries() as { countries: ICountries[] };
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
