import { InputProps } from '@ts/types/general.types';

export function Input(props: InputProps) {
  return (
    <label>
      {props.children}
      <input name={props.name} type={props.type} />
    </label>
  );
}
