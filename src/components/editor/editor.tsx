import { formDataSleector } from '@store/selectors/form-selectors';
import { useSelector } from 'react-redux';
import { DraggableBox } from '@components/editor/components/draggable-box';

import styles from './editor.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '@/hooks/store';

export const Editor = () => {
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
    <div
      ref={editorRef}
      style={{ aspectRatio: formdata.size || '1/1.5', width: '400px' }}
      className={styles.root}
    >
      <DraggableBox text={formdata.series} id={0} dimensions={editorDimensions} />
      {/* <p className={styles.text}>{formdata.author}</p>
      <p className={styles.text}>{formdata.title}</p>
      <p className={styles.text}>{formdata.year}</p> */}
    </div>
  );
};
