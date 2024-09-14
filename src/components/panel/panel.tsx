import { useAppDispatch } from '@/hooks/store';

export const Panel = () => {
  const dispatch = useAppDispatch();

  const onAlignCenter = () => {
    dispatch({ type: 'currItem/setAlignment', payload: { horizontal: 'center' } });
  };

  const onAlignLeft = () => {
    dispatch({ type: 'currItem/setAlignment', payload: { horizontal: 'left' } });
  };

  return (
    <div>
      <button onClick={onAlignCenter}>align center</button>
      <button onClick={onAlignLeft}>align left</button>
    </div>
  );
};
