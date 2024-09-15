import { useAppDispatch } from '@/hooks/store';
import { Button } from '@shared/button';
import { JustifyCenterIcon } from '@/assets/icons/justify-center';
import { Input } from '@shared/input';
import { NumberInput } from '@components/panel/components/number-input';
import { BoldIcon } from '@/assets/icons/bold';
import { ItalicIcon } from '@/assets/icons/italic';
import { AlignCenterIcon } from '@/assets/icons/align-center';
import { DropoutList } from '@shared/dropout-list';
import cn from 'classnames';

import styles from './panel.module.scss';
import { AlignBottomIcon } from '@/assets/icons/align-bottom';
import { AlignTopIcon } from '@/assets/icons/align-top';
import { JustifyLeftIcon } from '@/assets/icons/justify-left';
import { JustifyRightIcon } from '@/assets/icons/justify-right';

type PanelProps = {
  className?: string;
};

export const Panel = ({ className }: PanelProps) => {
  const dispatch = useAppDispatch();

  const onAlignCenter = () => {
    dispatch({ type: 'currItem/setAlignment', payload: { horizontal: 'center' } });
  };

  const onAlignLeft = () => {
    dispatch({ type: 'currItem/setAlignment', payload: { horizontal: 'left' } });
  };

  return (
    <div className={cn(styles.root, className)}>
      <Input value={'Roboto'} />
      <NumberInput />
      <Button
        type='transparent'
        icon
        rightAddon={<div className={styles.color} style={{ backgroundColor: 'red' }}></div>}
      />
      <Button
        type='transparent'
        rightAddon={<BoldIcon width={20} />}
        icon
        className={cn({ [styles.button_active]: true })}
      />
      <Button
        type='transparent'
        rightAddon={<ItalicIcon width={20} />}
        icon
        className={cn({ [styles.button_active]: true })}
      />
      <DropoutList
        items={[
          <JustifyCenterIcon width={20} fill='var(--color-dk-gray)' id='justify-center' />,
          <JustifyLeftIcon width={20} fill='var(--color-dk-gray)' id='justify-left' />,
          <JustifyRightIcon width={20} fill='var(--color-dk-gray)' id='justify-right' />,
        ]}
      />
      <DropoutList
        items={[
          <AlignCenterIcon width={20} fill='var(--color-dk-gray)' id='align-center' />,
          <AlignBottomIcon width={20} fill='var(--color-dk-gray)' id='align-bottom' />,
          <AlignTopIcon width={20} fill='var(--color-dk-gray)' id='align-top' />,
        ]}
      />
    </div>
  );
};
