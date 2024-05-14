import { useRef } from 'react';
import { MultiBox } from '@components/editor/multi-box';
import { useFormContext } from '@contexts/app-context/form-context';
import { FormContextType } from '@ts/types/form.types';
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
  const formContext: FormContextType = useFormContext();

  const editorElem = useRef(null);

  return (
    <div
      className={`editor ${props.className || ''}`}
      style={{ ...spliceDimensions(props.size), backgroundColor: '#d7d7d7' }}
      ref={editorElem}
    >
      {Object.entries(formContext.displayData).map(
        ([, [storeValue, setStoreValue]], idx) =>
          storeValue && (
            <MultiBox
              key={idx}
              text={storeValue}
              onInputChange={(e) => setStoreValue(e.target.value)}
            />
          ),
      )}
    </div>
  );
}
