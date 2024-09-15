import { InputProps } from '@shared/input/input';
import { Text } from '@shared/typography/text';
import React, { useState } from 'react';
import cn from 'classnames';

import styles from './input-autocomplete.module.scss';

type InputAutocompleteProps = InputProps & {};

const items = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7'];

export const InputAutocomplete = React.forwardRef<HTMLInputElement, InputAutocompleteProps>(
  ({ label, ...rest }, ref) => {
    const [isOpen, setIsOpen] = useState(true);
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    return (
      <div className={styles.input_wrapper}>
        <label>
          {label && (
            <Text size={14} className={styles.label}>
              {label}
            </Text>
          )}
          <div onClick={() => setIsOpen(true)}>
            <input {...rest} ref={ref} className={styles.input} />
          </div>
        </label>
        <div className={cn(styles.dropdown, { [styles.dropdown_collapsed]: !isOpen })}>
          <div className={styles.dropdown_container}>
            {items.map((item) => (
              <div
                className={cn(styles.dropdown_item, {
                  [styles.dropdown_item_active]: selectedItem === item,
                })}
                onClick={() => {
                  setSelectedItem(item);
                  setIsOpen(false);
                }}
              >
                <Text className={styles.dropdown_item_inner}>{item}</Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
);
