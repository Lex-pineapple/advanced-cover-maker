import { useRef, useState } from 'react';
import { DraggableBox } from '@components/editor/draggable-box';
import { EditableBox } from '@components/editor/editable-box';
import { ResizableBox } from '@components/editor/resizable-box';

type MultiBoxProps = {
  editorElem: React.MutableRefObject<null>;
  text: string | number;
  onInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export function MultiBox(props: MultiBoxProps) {
  const [dragEnabled, setDragEnabled] = useState(false);
  const [resizeEnabled, setResizeEnabled] = useState(false);
  const [cursorStatus, setCursorStatus] = useState('pointer');
  const elementRef = useRef(null);

  const changeSelectorType = () => {
    if (dragEnabled) {
      setDragEnabled(false);
      setResizeEnabled(true);
      setCursorStatus('pointer');
    } else {
      setDragEnabled(true);
      setResizeEnabled(false);
      setCursorStatus('move');
    }
  };

  return (
    <div className='multi-box'>
      <DraggableBox
        dragEnabled={dragEnabled}
        editorRef={props.editorElem}
        cursorStatus={cursorStatus}
        changeSelectorType={changeSelectorType}
        blockRef={elementRef}
      >
        <ResizableBox resizeEnabled={resizeEnabled} resizableRef={elementRef}>
          <EditableBox text={props.text} type='input'>
            <textarea
              className='editable-input'
              value={props.text}
              onChange={props.onInputChange}
            />
          </EditableBox>
        </ResizableBox>
      </DraggableBox>
    </div>
  );
}
