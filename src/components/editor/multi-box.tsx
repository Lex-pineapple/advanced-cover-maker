import { useRef } from 'react';
import { TextArea } from '@components/common/inputs/textarea';
import { DraggableBox } from '@components/editor/draggable-box';
import { EditableBox } from '@components/editor/editable-box';
import { ResizableBox } from '@components/editor/resizable-box';

type MultiBoxProps = {
  text: string | number;
  onInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export function MultiBox(props: MultiBoxProps) {
  const elementRef = useRef(null);

  return (
    <div className='multi-box'>
      <DraggableBox blockRef={elementRef}>
        <ResizableBox resizableRef={elementRef}>
          <EditableBox text={props.text} type='input'>
            <TextArea
              className='editable-box__input'
              value={props.text}
              onChange={props.onInputChange}
            />
          </EditableBox>
        </ResizableBox>
      </DraggableBox>
    </div>
  );
}
