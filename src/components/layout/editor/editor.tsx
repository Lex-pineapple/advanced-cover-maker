import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MultiBox } from '@components/editor/multi-box';
import { FieldTypes, setValueAction } from '@store/action-creators/display-actions';
import { displaySelector } from '@store/selectors/display-selectors';
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
  const displayFields = useSelector(displaySelector);
  const dispatch = useDispatch();
  const editorElem = useRef(null);

  return (
    <div
      className={`editor ${props.className || ''}`}
      style={{ ...spliceDimensions(props.size), backgroundColor: 'white' }}
      ref={editorElem}
    >
      {Object.entries(displayFields).map(
        ([fieldName, field], idx) =>
          field.value && (
            <MultiBox
              // eslint-disable-next-line react/no-array-index-key
              key={idx}
              text={field.value}
              onInputChange={(e) =>
                dispatch(setValueAction(e.target.value, fieldName as FieldTypes))
              }
            />
          ),
      )}
    </div>
  );
}
