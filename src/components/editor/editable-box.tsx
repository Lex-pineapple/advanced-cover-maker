import { useState } from 'react';
import { EditableBoxProps } from '@ts/types/general.types';

export function EditableBox(props: EditableBoxProps) {
  const [isEditing, setEditing] = useState(false);

  return (
    <div className={`editable-box ${props.isEditable ? 'editable-box--enabled' : ''}`}>
      {isEditing && props.isEditable ? (
        <div onBlur={() => setEditing(false)}>{props.children}</div>
      ) : (
        <div onClick={() => setEditing(true)}>
          <div className='editable-box__static' style={{ whiteSpace: 'pre-wrap' }}>
            {props.text}
          </div>
        </div>
      )}
    </div>
  );
}
