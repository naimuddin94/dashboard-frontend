import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import LeaderTable from './LeaderTable';
import useLeaders from '../../hooks/useLeaders';

const ManageLeader = () => {
  const { leaders } = useLeaders();
  return (
    <>
      <Breadcrumb pageName="All Leaders" />

      <div className="flex flex-col gap-10">
        <LeaderTable data={leaders} />
      </div>
    </>
  );
};

export default ManageLeader;
