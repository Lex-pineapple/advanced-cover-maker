import { type MouseEventHandler, type ReactNode } from 'react';
import cn from 'classnames';

import styles from './button.module.scss';

export type ButtonProps = {
  rightAddon?: JSX.Element;
  width?: string;
  height?: string;
  block?: boolean;
  type?: 'main' | 'outlined';
  htmlType?: 'button' | 'submit';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  className?: string;
  fill?: string;
};

export const Button = ({
  onClick,
  children,
  block,
  width,
  height,
  type = 'main',
  htmlType = 'button',
  rightAddon,
  className,
  fill,
}: ButtonProps) => (
  <button
    type={htmlType === 'button' ? 'button' : 'submit'}
    onClick={onClick}
    className={cn(styles.root, className, {
      [styles[type]]: true,
      [styles.block]: block,
    })}
    style={{ width, height, backgroundColor: fill }}
  >
    {children}
    {rightAddon}
  </button>
);
