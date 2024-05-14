import { DetailedComponentProps } from '@ts/types/general.types';

type IconWrapperComponentProps = {
  icon: JSX.Element;
};

type IconWrapperProps = DetailedComponentProps<IconWrapperComponentProps>;

export function IconWrapper(props: IconWrapperProps) {
  return <div className={props.className}>{props.icon}</div>;
}
