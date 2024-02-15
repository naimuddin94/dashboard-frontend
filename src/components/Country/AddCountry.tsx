import DefaultLayout from '../../layout/DefaultLayout';
import Button from '../Utility/Button';
import { GiCheckMark } from 'react-icons/gi';

const AddCountry = () => {
  return (
    <DefaultLayout>
      {/* <!-- Input Fields --> */}
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Add Country
          </h3>
        </div>
        <div className="flex flex-col gap-5.5 p-6.5">
          <div>
            <label className="mb-3 block text-black dark:text-white">
              Name
            </label>
            <input
              type="text"
              placeholder="Country name"
              className="custom-input"
            />
          </div>
          <div>
            <label className="mb-3 block text-black dark:text-white">
              Code
            </label>
            <input
              type="text"
              placeholder="Country code"
              className="custom-input"
            />
          </div>
          <div>
            <Button icon={GiCheckMark}>Save</Button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default AddCountry;
