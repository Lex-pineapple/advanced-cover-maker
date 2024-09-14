import { type ElementType, type ReactNode } from "react";
import cn from "classnames";

import styles from "./text.module.scss";

type TextProps = {
  children: ReactNode;
  className?: string;
  type?: "primary" | "secondary";
  weight?: "thin" | "normal" | "semibold" | "bold";
  inverted?: boolean;
  size?: 10 | 14 | 16 | 18 | 20 | 24;
  tag?: ElementType;
};

export const Text = ({
  tag: Element = "p",
  inverted,
  type = "primary",
  weight = "normal",
  size,
  children,
  className,
}: TextProps) => (
  <Element
    className={cn(styles.root, className, {
      [styles[type]]: true,
      [styles[weight]]: true,
      [styles.inverted]: inverted,
    })}
    style={{ fontSize: size && `${size}px` }}
  >
    {children}
  </Element>
);
