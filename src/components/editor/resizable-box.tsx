import { PropsWithChildren, useRef } from 'react';

enum Direction {
  Horizontal = 'Horizontal',
  Vertical = 'Vertical',
}
export function ResizableBox(props: PropsWithChildren) {
  const elementRef = useRef(null);

  const updateCursor = (direction: Direction) => {
    document.body.style.cursor = direction === Direction.Horizontal ? 'col-resize' : 'row-resize';
    document.body.style.userSelect = 'none';
  };

  const resetCursor = () => {
    document.body.style.removeProperty('cursor');
    document.body.style.removeProperty('user-select');
  };

  const handleMouseDown = (e) => {
    const ele = elementRef.current;

    if (!ele) {
      return;
    }
    const direction = e.target.classList.contains('resizer--r')
      ? Direction.Horizontal
      : Direction.Vertical;
    const startPos = {
      x: e.clientX,
      y: e.clientY,
    };
    const styles = window.getComputedStyle(ele);
    const w = parseInt(styles.width, 10);
    const h = parseInt(styles.height, 10);

    const handleMouseMove = (e: React.MouseEvent) => {
      const dx = e.clientX - startPos.x;
      const dy = e.clientY - startPos.y;

      direction === Direction.Horizontal
        ? (ele.style.width = `${w + dx}px`)
        : (ele.style.height = `${h + dy}px`);

      updateCursor(direction);
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      resetCursor();
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div className='resizable' ref={elementRef}>
      <div className='resizer resizer--r' onMouseDown={handleMouseDown} />
      <div className='resizer resizer--b' onMouseDown={handleMouseDown} />
      {props.children}
    </div>
  );
}
