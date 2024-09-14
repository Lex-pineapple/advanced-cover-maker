import { SVGProps } from 'react';

export const JustifyLeftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M21,10H16V7a1,1,0,0,0-1-1H4V3A1,1,0,0,0,2,3V21a1,1,0,0,0,2,0V18H21a1,1,0,0,0,1-1V11A1,1,0,0,0,21,10ZM4,8H14v2H4Zm16,8H4V12H20Z'
        fill={props.fill || '#6563ff'}
      />
    </svg>
  );
};
