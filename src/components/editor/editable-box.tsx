import { useState } from 'react';
import { EditableBoxProps } from '@ts/types/general.types';

export function EditableBox(props: EditableBoxProps) {
  const [isEditing, setEditing] = useState(false);

  return (
    <div className='editable-box'>
      {isEditing ? (
        <div onBlur={() => setEditing(false)}>{props.children}</div>
      ) : (
        <div onClick={() => setEditing(true)}>
          <span>{props.text}</span>
        </div>
      )}
    </div>
  );
}
