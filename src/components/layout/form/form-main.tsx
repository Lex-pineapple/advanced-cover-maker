import { useDispatch } from 'react-redux';
import { Input } from '@components/form';
import { FieldTypes, setValueAction } from '@store/action-creators/display-actions';

import './form.scss';

export function FormMain() {
  const dispatch = useDispatch();

  return (
    <form className='form'>
      <Input
        name='title'
        type='text'
        onChange={(e) => dispatch(setValueAction(e.target.value, FieldTypes.TITLE))}
      >
        Book title
      </Input>
      <Input
        name='author'
        type='text'
        onChange={(e) => dispatch(setValueAction(e.target.value, FieldTypes.AUTHOR))}
      >
        Author
      </Input>
      <Input
        name='year'
        type='number'
        onChange={(e) => dispatch(setValueAction(e.target.value, FieldTypes.YEAR))}
      >
        Year of publishing
      </Input>
      <Input
        name='series'
        type='text'
        onChange={(e) => dispatch(setValueAction(e.target.value, FieldTypes.SERIES))}
      >
        Series
      </Input>
      {/* <Select
        items={mapSelectDimentionItems(dimensions)}
        name='dimensions'
        onChange={(e) => setStoreDimensions(e.target.value)}
      >
        Dimensions
      </Select> */}
      {/* <Select items={mapSelectDimentionItems(designs)} name='designs'>
        Design
      </Select> */}
    </form>
  );
}
