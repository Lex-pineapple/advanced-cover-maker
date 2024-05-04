import { SelectProps } from '@ts/types/general.types';

export function Select(props: SelectProps) {
  return (
    <label>
      {props.children}
      <select name={props.name} onChange={props.onChange}>
        {props.items.map((item) => (
          <option value={item.value}>{item.name}</option>
        ))}
      </select>
    </label>
  );
}
