import { Text } from '@shared/typography/text';
import React from 'react';

import styles from './input.module.scss';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label?: string;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ label, ...rest }, ref) => {
  return (
    <label>
      {label && (
        <Text size={14} className={styles.label}>
          {label}
        </Text>
      )}
      <input {...rest} ref={ref} className={styles.input} />
    </label>
  );
});
