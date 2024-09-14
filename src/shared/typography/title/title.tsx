import { type ReactNode } from 'react';
import cn from 'classnames';

import styles from './title.module.scss';

type TitleProps = {
  order: 1 | 2 | 3 | 4 | 5;
  children: ReactNode;
  className?: string;
  inverted?: boolean;
};

export const Title = ({ order, children, inverted, className }: TitleProps) => {
  const DynamicHeader = `h${order}` as keyof JSX.IntrinsicElements;

  return (
    <DynamicHeader
      className={cn(styles[`order_${order}`], styles.root, className, {
        [styles.inverted]: inverted,
      })}
    >
      {children}
    </DynamicHeader>
  );
};
