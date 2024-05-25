import { useRef, useState } from 'react';
import { TextArea } from '@components/common/inputs/textarea';
import { DraggableBox } from '@components/editor/draggable-box';
import { EditableBox } from '@components/editor/editable-box';
import { ResizableBox } from '@components/editor/resizable-box';
import { PositionProps } from '@ts/types/editor.types';

type MultiBoxProps = {
  text: string | number;
  onInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  initialPos?: PositionProps;
};

export function MultiBox(props: MultiBoxProps) {
  const elementRef = useRef(null);
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className='multi-box'>
      <DraggableBox
        blockRef={elementRef}
        isSelected={isSelected}
        setSelected={() => setIsSelected(true)}
        data={props.text}
        initialPos={props.initialPos}
      >
        <ResizableBox resizableRef={elementRef} resizeEnabled={isSelected}>
          <EditableBox text={props.text} type='input' isEditable={isSelected}>
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
