import { InputProps } from '@ts/types/general.types';

export function Input(props: InputProps) {
  return (
    <label className={`label label-${props.type} form__label`}>
      {props.children}
      <input
        className={`input input-${props.type} form__input`}
        name={props.name}
        type={props.type}
        onChange={props.onChange}
      />
    </label>
  );
}
