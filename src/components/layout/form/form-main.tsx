import { Input } from '@components/form';
import { Select } from '@components/form/select';
import { dimensions } from '@constants/form';
import { useFormContext } from '@contexts/app-context/form-context';
import { FormContextType } from '@ts/types/form.types';
import { mapSelectDimentionItems } from '@utils/map-select-dimention-items';

import './form.scss';

export function FormMain() {
  const formContext: FormContextType = useFormContext();
  const {
    title: [storeTitle, setStoreTitle],
    author: [storeAuthor, setStoreAuthor],
    year: [storeYear, setStoreYear],
    series: [storeSeries, setStoreSeries],
  } = formContext.displayData;

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
