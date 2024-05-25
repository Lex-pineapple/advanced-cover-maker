import { SelectProps } from '@ts/types/general.types';

export function Select(props: SelectProps) {
  return (
    <label className='label label-select form__label'>
      {props.children}
      <select
        className='input input-select form__input'
        name={props.name}
        onChange={props.onChange}
      >
        {props.items.map((item) => (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </label>
  );
}
