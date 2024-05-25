import { PropsWithChildren, ReactNode, TextareaHTMLAttributes } from 'react';
import { PositionProps } from '@ts/types/editor.types';

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
  id?: string;
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

export type EditableBoxProps = {
  text: string | number;
  type: string;
  children: ReactNode | undefined;
  isEditable: boolean;
};

export type DetailedComponentProps<T> = T & BasicComponentProps;

export type ButtonComponentProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseDown?: React.MouseEventHandler<HTMLButtonElement>;
  style?: React.CSSProperties;
  text?: string | number;
  icon?: JSX.Element;
};

export type InputProps = PropsWithChildren<DetailedComponentProps<InputComponentProps>>;
export type SelectProps = PropsWithChildren<DetailedComponentProps<SelectComponentProps>>;
export type ButtonProps = DetailedComponentProps<ButtonComponentProps>;
export type TextareaProps = DetailedComponentProps<TextareaHTMLAttributes<HTMLTextAreaElement>>;

export type DetailedIconProps = {
  width?: number;
  height?: number;
  color?: string;
};

export type StoreDisplayElement = {
  value: number | string;
  position: PositionProps;
};
