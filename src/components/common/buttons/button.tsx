import { ButtonProps } from '@ts/types/general.types';

export function Button(props: ButtonProps) {
  return (
    <button
      type='button'
      aria-label={props.className}
      className={`button ${props.className}`}
      onClick={props.onClick}
      onMouseDown={props.onMouseDown}
      style={props.style}
    >
      {props.icon ? (
        <span className='button-inner--with-icon'>
          {props.icon}
          {props.text && <p className='button__text'>{props.text}</p>}
        </span>
      ) : (
        <span className='button-inner'>
          <p className='button__text'>{props.text}</p>
        </span>
      )}
    </button>
  );
}
