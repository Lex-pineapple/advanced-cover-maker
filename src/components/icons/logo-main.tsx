import { IconWrapper } from '@components/icons/icon-wrapper';
import { DetailedIconProps } from '@ts/types/general.types';

export function LogoMain(props: DetailedIconProps) {
  return (
    <IconWrapper
      className='logo-icon logo-icon--main icon'
      icon={
        <svg
          height={props.height || '100%'}
          width={props.width || '100%'}
          viewBox='124 134.97 42 40.131'
        >
          <rect x='124' y='135.101' width='8' height='40' fill='currentColor' />
          <rect x='141' y='134.97' width='8' height='40' fill='currentColor' />
          <rect x='158' y='135' width='8' height='40' fill='currentColor' />
        </svg>
      }
    />
  );
}
