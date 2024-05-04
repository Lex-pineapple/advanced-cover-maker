import { Input } from '@components/form';
import { Select } from '@components/form/select';
import { dimensions } from '@constants/form';
import { useFormContext } from '@contexts/app-context/form-context';
import { mapSelectDimentionItems } from '@utils/map-select-dimention-items';

import './form.scss';

type FormInputs = {
  title: string;
  author: string;
  year: number;
};

export function FormMain() {
  const {
    title: [storeTitle, setStoreTitle],
    author: [storeAuthor, setStoreAuthor],
    year: [storeYear, setStoreYear],
    series: [storeSeries, setStoreSeries],
    dimensions: [storeDimensions, setStoreDimensions],
  } = useFormContext();

  return (
    <form className='form'>
      <Input name='title' type='text' onChange={(e) => setStoreTitle(e.target.value)}>
        Book title
      </Input>
      <Input name='author' type='text' onChange={(e) => setStoreAuthor(e.target.value)}>
        Author
      </Input>
      <Input name='year' type='number' onChange={(e) => setStoreYear(e.target.value)}>
        Year of publishing
      </Input>
      <Input name='series' type='text' onChange={(e) => setStoreSeries(e.target.value)}>
        Series
      </Input>
      <Select
        items={mapSelectDimentionItems(dimensions)}
        name='dimensions'
        onChange={(e) => setStoreDimensions(e.target.value)}
      >
        Dimensions
      </Select>
    </form>
  );
}
