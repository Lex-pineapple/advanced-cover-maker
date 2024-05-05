import { SyntheticEvent, useEffect, useRef, useState } from 'react';
import { EditableBox } from '@components/editor/editable-box';
import { EditableBoxProps } from '@ts/types/general.types';

const requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;
const cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

export function DraggableBox(props: EditableBoxProps) {
  const [isDragging, setDragging] = useState(false);
  const block = useRef(null);
  const frameID = useRef(0);
  const lastX = useRef(0);
  const lastY = useRef(0);
  const dragX = useRef(0);
  const dragY = useRef(0);

  const handleMove = (e) => {
    if (!isDragging) {
      return;
    }

    const deltaX = lastX.current - e.pageX;
    const deltaY = lastY.current - e.pageY;

    const rect = props.editorRef.current.getBoundingClientRect();

    console.log('rect width', rect.width, 'dragX', e.x + e.target.offsetWidth - e.offsetX);

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
      block.current.style.transform = `translate3d(${dragX.current}px, ${dragY.current}px, 0)`;
    });
  };

  const handleMouseDown = (e) => {
    lastX.current = e.pageX;
    lastY.current = e.pageY;
    setDragging(true);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className='draggable' ref={block} onMouseDown={handleMouseDown}>
      aaa
      {/* <EditableBox text={props.text} type={props.type}>
        {props.children}
      </EditableBox> */}
    </div>
  );
}
