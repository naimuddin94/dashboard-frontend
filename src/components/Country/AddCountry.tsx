import { FormEvent } from 'react';
import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import Button from '../Utility/Button';
import { GiCheckMark } from 'react-icons/gi';

const AddCountry = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = form.country.value;
    const code = form.code.value;

    const country = { name, code };

    console.log(country);
  };
  return (
    <>
      <Breadcrumb pageName="Add Country" />
      <form onSubmit={handleSubmit}>
        {/* <!-- Input Fields --> */}
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              ➕ Country
            </h3>
          </div>
          <div className="flex flex-col gap-5.5 p-6.5">
            <div>
              <label className="mb-3 block text-black dark:text-white">
                Name
              </label>
              <input
                name='country'
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
                name='code'
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
      </form>
    </>
  );
};

export default AddCountry;
