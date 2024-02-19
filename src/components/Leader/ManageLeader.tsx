import { useLoaderData } from 'react-router-dom';
import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import { ILeader } from '../../types/types';
import LeaderTable from './LeaderTable';

const ManageLeader = () => {
  const { data } = useLoaderData() as {data: ILeader[]};
  return (
    <>
      <Breadcrumb pageName="All Leaders" />

      <div className="flex flex-col gap-10">
        <LeaderTable data={data}/>
      </div>
    </>
  );
};

export default ManageLeader;
