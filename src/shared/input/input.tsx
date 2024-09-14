import React from 'react';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label?: string;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ label, ...rest }, ref) => {
  return (
    <label>
      {label}
      <input {...rest} ref={ref} />
    </label>
  );
});
