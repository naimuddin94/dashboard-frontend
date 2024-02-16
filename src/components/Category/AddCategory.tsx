import { GiCheckMark } from 'react-icons/gi';
import DefaultLayout from '../../layout/DefaultLayout';
import Button from '../Utility/Button';
import SelectGroupTwo from '../Forms/SelectGroup/SelectGroupTwo';
import { CiTimer } from 'react-icons/ci';
import { options } from '../Customer/CustomerForm';
import SelectGroupOne from '../Forms/SelectGroup/SelectGroupOne';
import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import { FormEvent } from 'react';
import { ICountryPriceList } from '../../types/types';

const countryOptions = [
  {
    _id: 'abc1',
    name: 'Bangladesh',
    code: 'BN',
  },
  {
    _id: 'abc12',
    name: 'India',
    code: 'IN',
  },
  {
    _id: 'abc123',
    name: 'Canada',
    code: 'CA',
  },
];

const AddCategory = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = form.category_name.value;
    const time = form.time.value;

    const countryPriceList: ICountryPriceList[] = [];

    countryOptions.forEach((country) => {
      const price = form[`${country.name}_price`].value;
      const status = form[`${country.name}_status`].value;
      countryPriceList.push({ name: country.name, price, status });
    });

    const category = { name, time, countryPriceList };
    console.log(category);
  };
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Add Category" />
      <form onSubmit={handleSubmit}>
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
                name="category_name"
                type="text"
                placeholder="Category name"
                className="custom-input"
              />
            </div>
            <div>
              <SelectGroupTwo
                name="time"
                label="Time"
                icon={CiTimer}
                options={options}
              />
            </div>
            <div>
              {countryOptions &&
                countryOptions.map((country) => (
                  <div key={country._id} className="flex gap-5">
                    {/* <!-- Input Fields --> */}
                    <div className="flex-1">
                      <input
                        type="text"
                        value={country.name}
                        className="custom-input"
                        disabled
                      />
                    </div>
                    {/* <!-- Input Fields --> */}
                    <div className="flex-1">
                      <input
                        name={`${country.name}_price`}
                        type="number"
                        placeholder="Price"
                        className="custom-input"
                      />
                    </div>
                    {/* <!-- Input Fields --> */}
                    <div className="flex-1">
                      <SelectGroupOne name={`${country.name}_status`} />
                    </div>
                  </div>
                ))}
            </div>
            <div>
              <Button icon={GiCheckMark}>Save</Button>
            </div>
          </div>
        </div>
      </form>
    </DefaultLayout>
  );
};

export default AddCategory;
