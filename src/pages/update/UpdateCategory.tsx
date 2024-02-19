import { useLoaderData } from 'react-router-dom';
import { ICountry } from '../../types/types';

const UpdateCategory = () => {
  const category = useLoaderData() as ICountry;
  console.log(category);
  return (
    <div>
      <h2>Category update</h2>
    </div>
  );
};

export default UpdateCategory;
