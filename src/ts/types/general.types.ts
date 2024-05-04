import { PropsWithChildren } from 'react';

type InputType =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

type BasicComponentProps = {
  className?: string;
};

type SelectItems = {
  value: string;
  name: string;
};

type SelectComponentProps = {
  items: SelectItems[];
  name: string;
  defaultValue: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
};

type InputComponentProps = {
  name: string;
  type: InputType;
  value?: string | number | boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export type DetailedComponentProps<T> = T & BasicComponentProps;

export type InputProps = PropsWithChildren<DetailedComponentProps<InputComponentProps>>;
export type SelectProps = PropsWithChildren<DetailedComponentProps<SelectComponentProps>>;
