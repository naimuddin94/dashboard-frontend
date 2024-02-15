import { GiCheckMark } from 'react-icons/gi';
import DefaultLayout from '../../layout/DefaultLayout';
import Button from '../Utility/Button';
import SelectGroupTwo from '../Forms/SelectGroup/SelectGroupTwo';
import { CiTimer } from 'react-icons/ci';
import { options } from '../Customer/CustomerForm';
import SelectGroupOne from '../Forms/SelectGroup/SelectGroupOne';
import Breadcrumb from '../Breadcrumbs/Breadcrumb';

const AddCategory = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Add Category" />
      {/* <!-- Input Fields --> */}
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            ➕ Category
          </h3>
        </div>
        <div className="flex flex-col gap-5.5 p-6.5">
          <div>
            <label className="mb-3 block text-black dark:text-white">
              Name
            </label>
            <input
              type="text"
              placeholder="Category name"
              className="custom-input"
            />
          </div>
          <div>
            <SelectGroupTwo label="Time" icon={CiTimer} options={options} />
          </div>
          <div className="flex gap-5">
            {/* <!-- Input Fields --> */}
            <div className="flex-1">
              <input
                type="text"
                value={'Bangladesh'}
                className="custom-input"
              />
            </div>
            {/* <!-- Input Fields --> */}
            <div className="flex-1">
              <input
                type="number"
                placeholder="Price"
                className="custom-input"
              />
            </div>
            {/* <!-- Input Fields --> */}
            <div className="flex-1">
              <SelectGroupOne />
            </div>
          </div>
          <div>
            <Button icon={GiCheckMark}>Save</Button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default AddCategory;
