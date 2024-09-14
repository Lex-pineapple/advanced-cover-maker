import React from 'react';

import styles from './number-input.module.scss';

export const NumberInput = React.forwardRef<HTMLInputElement, any>((props, ref) => {
  return (
    <div className={styles.root}>
      <button className={styles.button_decrement}>-</button>
      <input className={styles.input} ref={ref}></input>
      <button className={styles.button_increment}>+</button>
    </div>
  );
});
