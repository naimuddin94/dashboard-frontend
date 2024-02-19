import { GiCheckMark } from 'react-icons/gi';
import Button from '../Utility/Button';
import SelectGroupTwo from '../Forms/SelectGroup/SelectGroupTwo';
import { CiTimer } from 'react-icons/ci';
import SelectGroupOne from '../Forms/SelectGroup/SelectGroupOne';
import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import { FormEvent } from 'react';
import { ICountries, ICountryPriceList } from '../../types/types';
import { useLoaderData } from 'react-router-dom';
import { axiosBase } from '../../hooks/useAxiosSecure';

const timeOptions = [
  '10 minutes',
  '20 minutes',
  '30 minutes',
  '40 minutes',
  '50 minutes',
  '60 minutes',
];

const AddCategory = () => {
  const { data: countries = [] } = useLoaderData() as { data: ICountries[] };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = form.category_name.value;
    const time = form.time.value;

    const countryPriceList: ICountryPriceList[] = [];

    countries.forEach((country) => {
      const price = parseFloat(form[`${country.name}_price`].value);
      const status = form[`${country.name}_status`].value;
      countryPriceList.push({ name: country.name, price, status });
    });

    const category = { name, time, countryPriceList };
    console.log(category);
    axiosBase
      .post('/category/create', category)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };
  return (
    <>
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
                options={timeOptions}
              />
            </div>
            <div>
              {countries &&
                countries.map((country) => (
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
    </>
  );
};

export default AddCategory;
