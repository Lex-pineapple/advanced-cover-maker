import { useState } from 'react';
import { Button } from '@shared/button';
import cn from 'classnames';

import styles from './dropout-list.module.scss';
type DropoutListProps = {
  items: JSX.Element[];
};

export const DropoutList = ({ items }: DropoutListProps) => {
  const [currElement, setCurrElement] = useState(items[0]);
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div>
      <Button
        type='transparent'
        rightAddon={currElement}
        icon
        className={styles.visible}
        onClick={() => {
          setCollapsed(!collapsed);
        }}
      />
      <div className={cn(styles.collapsible, { [styles.collapsed]: collapsed })}>
        {items.map((item, idx) => (
          <Button
            key={item.key}
            type='transparent'
            style={{
              transform: collapsed ? 'translateY(-40px)' : `translateY(${16 + idx * 50}px)`,
            }}
            rightAddon={item}
            icon
            className={styles.collapsible_item}
            onClick={() => {
              setCurrElement(item);
              setCollapsed(true);
            }}
          />
        ))}
      </div>
    </div>
  );
};
