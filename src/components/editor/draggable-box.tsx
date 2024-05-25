/* eslint-disable react-hooks/exhaustive-deps */
import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { Button } from '@components/common/buttons/button';
import { MoveIcon } from '@components/icons/move-icon';
import { PositionProps } from '@ts/types/editor.types';

type DraggableBoxProps = {
  blockRef: React.MutableRefObject<HTMLDivElement | null>;
  isSelected: boolean;
  setSelected: () => void;
  data: any;
  initialPos?: PositionProps;
};

const { requestAnimationFrame } = window;
const { cancelAnimationFrame } = window;

export function DraggableBox(props: PropsWithChildren<DraggableBoxProps>) {
  const [isDragging, setDragging] = useState(false);

  const block = props.blockRef;
  const frameID = useRef(0);
  const lastX = useRef(0);
  const lastY = useRef(0);
  const dragX = useRef(0);
  const dragY = useRef(0);

  const handleMove = (e: MouseEvent) => {
    if (!isDragging) {
      return;
    }

    const deltaX = lastX.current - e.pageX;
    const deltaY = lastY.current - e.pageY;

    if (dragX.current < 0) dragX.current = 0;
    if (dragY.current < 0) dragY.current = 0;
    else {
      lastX.current = e.pageX;
      lastY.current = e.pageY;
      dragX.current -= deltaX;
      dragY.current -= deltaY;
    }

    cancelAnimationFrame(frameID.current);

    frameID.current = requestAnimationFrame(() => {
      if (block.current) {
        block.current.style.transform = `translate3d(${dragX.current}px, ${dragY.current}px, 0)`;
      }
    });
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    lastX.current = e.pageX;
    lastY.current = e.pageY;
    setDragging(true);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    if (block.current) {
      block.current.style.width = 'fit-content';
      block.current.style.width = `${block.current?.offsetWidth}px`;
    }
  }, [props.data]);

  useEffect(() => {
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className={`draggable ${props.isSelected ? 'draggable--selected' : ''}`}
      ref={block}
      onClick={props.setSelected}
    >
      {props.children}
      {props.isSelected && (
        <Button onMouseDown={handleMouseDown} className='draggable__selector' icon={<MoveIcon />} />
      )}

      {/* <button
        type='button'
        aria-label='multi-box__selector'
        className='multi-box__selector'
        onClick={props.changeSelectorType}
        onMouseDown={handleMouseDown}
        style={{ cursor: props.cursorStatus }}
      /> */}
    </div>
  );
}
