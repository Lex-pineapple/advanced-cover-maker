import { formDataSleector } from '@store/selectors/form-selectors';
import { useSelector } from 'react-redux';
import { DraggableBox } from '@components/editor/components/draggable-box';

import styles from './editor.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '@/hooks/store';
import cn from 'classnames';

type EditorProps = {
  className?: string;
};

export const Editor = ({ className }: EditorProps) => {
  const dispatch = useAppDispatch();
  const editorRef = useRef(null);
  const [editorDimensions, setEditorDimensions] = useState<DOMRect>();
  const formdata = useSelector(formDataSleector);

  useEffect(() => {
    dispatch({ type: 'item/addNewItem' });
  }, []);

  useEffect(() => {
    if (editorRef.current) {
      const editorData = (editorRef.current as Element).getBoundingClientRect();
      setEditorDimensions(editorData);
    }
  }, [editorRef.current]);

  return (
    <div className={className}>
      <div
        ref={editorRef}
        style={{ aspectRatio: formdata.size || '1/1.5', width: '400px' }}
        className={cn(styles.root)}
      >
        <DraggableBox text={formdata.series} id={0} dimensions={editorDimensions} />
        <DraggableBox text={formdata.author} id={1} dimensions={editorDimensions} />
      </div>
    </div>
  );
};
