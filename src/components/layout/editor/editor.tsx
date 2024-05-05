import { useRef } from 'react';
import { DraggableBox } from '@components/editor/draggable-box';
import { ResizableBox } from '@components/editor/resizable-box';
import { useFormContext } from '@contexts/app-context/form-context';
import { DetailedComponentProps } from '@ts/types/general.types';

import './editor.scss';

type EditorProps = {
  size: string;
};

function spliceDimensions(size: string) {
  const splitSize = size.split('x');

  return {
    aspectRatio: `${splitSize[0]} / ${splitSize[1]}`,
  };
}

export function Editor(props: DetailedComponentProps<EditorProps>) {
  const {
    title: [storeTitle, setStoreTitle],
    author: [storeAuthor, setStoreAuthor],
    year: [storeYear, setStoreYear],
    series: [storeSeries, setStoreSeries],
    dimensions: [storeDimensions, setStoreDimensions],
  } = useFormContext();

  const editorElem = useRef(null);

  return (
    <div
      className={`editor ${props.className || ''}`}
      style={{ ...spliceDimensions(props.size), backgroundColor: 'gray' }}
      ref={editorElem}
    >
      <ResizableBox>
        <DraggableBox text={storeTitle} type='input' editorRef={editorElem}>
          <textarea
            className='editable-input'
            value={storeTitle}
            onChange={(e) => setStoreTitle(e.target.value)}
          />
        </DraggableBox>
      </ResizableBox>
    </div>
  );
}
