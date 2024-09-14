import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';

import styles from './draggable-box.module.scss';
import { useAppDispatch } from '@/hooks/store';
import { useSelector } from 'react-redux';
import { currItemSelector, itemsArraySelector } from '@store/selectors/item-selectors';
import { ItemTypeOptions } from '@store/reducers/current-item-slice';

type DraggableBoxProps = {
  text: string;
  id: number;
  dimensions: any;
};

export const DraggableBox = ({ text, id, dimensions }: DraggableBoxProps) => {
  const dispatch = useAppDispatch();
  const [resizeState, setResizeState] = useState(false);
  const textBoxRef = useRef(null);
  const itemsArray = useSelector(itemsArraySelector);
  const currItem = useSelector(currItemSelector);
  const [calculatedStyles, setCalculatedStyles] = useState<React.CSSProperties>();

  useEffect(() => {
    if (currItem.key === id) {
      handleParamsChange(currItem.options);
    }
  }, [currItem]);

  const handleParamsChange = (options: ItemTypeOptions) => {
    if (textBoxRef.current) {
      if (options.alignment?.horizontal === 'center') {
        const { width } = (textBoxRef.current as Element).getBoundingClientRect();
        console.log('updating', `${dimensions.width / 2 - width / 2}px`);

        setCalculatedStyles({ ...calculatedStyles, left: `${dimensions.width / 2 - width / 2}px` });
      }
      if (options.alignment?.horizontal === 'left') {
        setCalculatedStyles({ ...calculatedStyles, left: 0 });
      }
    }
  };

  const handleOnClick = () => {
    const item = itemsArray.find((item) => item.key === id);
    if (item) dispatch({ type: 'currItem/setCurrItem', payload: item });
    setResizeState(!resizeState);
  };

  return (
    <div
      ref={textBoxRef}
      onClick={handleOnClick}
      className={cn(styles.root, { [styles.resize_enabled]: resizeState })}
      style={calculatedStyles}
    >
      <div className={styles.text}>{text}</div>
      {resizeState && <div className={styles.marker_vertical_left} />}
    </div>
  );
};
