import { FaPlus } from 'react-icons/fa';
import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import Button from '../Utility/Button';
import { FormEvent } from 'react';

const LeaderForm = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const phoneNumber = form.phoneNumber.value;
    const whatsapp = form.whatsapp.value;
    const skype = form.skype.value;
    const photo = form.photo.files[0];
    const NIDCopy = form.NIDCopy.files[0];
    const country = form.country.value;
    const city = form.city.value;
    const fullAddress = form.fullAddress.value;
    const nidNumber = form.nidNumber.value;
    const email = form.email.value;
    const password = form.password.value;

    const leader = {
      firstName,
      lastName,
      phoneNumber,
      whatsapp,
      skype,
      photo,
      NIDCopy,
      country,
      city,
      fullAddress,
      nidNumber,
      email,
      password,
    };

  };
  return (
    <>
      <Breadcrumb pageName="Add Leader" />

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
          <div className="flex flex-col gap-9">
            {/* <!-- Identity Input --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">Name</h3>
              </div>
              <div className="flex flex-col gap-5.5 p-6.5">
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    First Name
                  </label>
                  <input
                    name="firstName"
                    type="text"
                    placeholder="Enter first name here"
                    className="custom-input"
                    required
                  />
                </div>

                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Last Name
                  </label>
                  <input
                    name="lastName"
                    type="text"
                    placeholder="Enter last name here"
                    className="custom-input"
                    required
                  />
                </div>
              </div>
            </div>

            {/* <!-- Input Fields --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Contact
                </h3>
              </div>
              <div className="flex flex-col gap-5.5 p-6.5">
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Phone Number
                  </label>
                  <input
                    name="phoneNumber"
                    type="text"
                    placeholder="Phone number with country code"
                    className="custom-input"
                    required
                  />
                </div>

                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Whatsapp
                  </label>
                  <input
                    name="whatsapp"
                    type="text"
                    placeholder="Enter whatsapp id"
                    className="custom-input"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Skype
                  </label>
                  <input
                    name="skype"
                    type="text"
                    placeholder="Enter skype id"
                    className="custom-input"
                  />
                </div>
              </div>
            </div>

            {/* <!-- File upload --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  File upload
                </h3>
              </div>
              <div className="flex flex-col gap-5.5 p-6.5">
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Photo
                  </label>
                  <input
                    name="photo"
                    type="file"
                    className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                    required
                  />
                </div>
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    NID Copy
                  </label>
                  <input
                    name="NIDCopy"
                    type="file"
                    className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-9">
            {/* <!-- Input Fields --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Address
                </h3>
              </div>
              <div className="flex flex-col gap-5.5 p-6.5">
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Country
                  </label>
                  <input
                    name="country"
                    type="text"
                    placeholder="Enter country name here"
                    className="custom-input"
                    required
                  />
                </div>

                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    City
                  </label>
                  <input
                    name="city"
                    type="text"
                    placeholder="Enter city name here"
                    className="custom-input"
                    required
                  />
                </div>

                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    State
                  </label>
                  <input
                    name="state"
                    type="text"
                    placeholder="Enter state here"
                    className="custom-input"
                  />
                </div>
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Full Address
                  </label>
                  <input
                    name="fullAddress"
                    type="text"
                    placeholder="Enter full address here"
                    className="custom-input"
                    required
                  />
                </div>
              </div>
            </div>

            {/* <!-- Input Fields --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Identity
                </h3>
              </div>
              <div className="flex flex-col gap-5.5 p-6.5">
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    National ID
                  </label>
                  <input
                    name="nidNumber"
                    type="text"
                    placeholder="Enter national identity number"
                    className="custom-input"
                    required
                  />
                </div>
              </div>
            </div>
            {/* <!-- Input Fields --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Authentication
                </h3>
              </div>
              <div className="flex flex-col gap-5.5 p-6.5">
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    User Email
                  </label>
                  <input
                    name="email"
                    type="text"
                    placeholder="example@mail.com"
                    className="custom-input"
                    required
                  />
                </div>

                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Password
                  </label>
                  <input
                    name="password"
                    type="text"
                    placeholder="***************"
                    className="custom-input"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <Button icon={FaPlus}>Add Leader</Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default LeaderForm;
