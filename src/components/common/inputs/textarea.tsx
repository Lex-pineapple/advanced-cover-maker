import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { TextareaProps } from '@ts/types/general.types';

export function TextArea(props: TextareaProps) {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [currVal, setCurrVal] = useState(props.value);

  const resizeTextArea = () => {
    if (ref.current) {
      ref.current.style.height = 'auto';
      ref.current.style.height = `${ref.current.scrollHeight}px`;
    }
  };

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCurrVal(e.target.value);
    if (props.onChange) props.onChange(e);
  };

  useEffect(resizeTextArea, [currVal]);

  return (
    <textarea
      ref={ref}
      className={props.className}
      id={props.id}
      value={currVal}
      onChange={onChange}
    />
  );
}
