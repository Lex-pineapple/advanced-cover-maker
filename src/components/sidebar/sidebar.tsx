import cn from 'classnames';

import styles from './sidebar.module.scss';
import { BookIcon } from '@/assets/icons/book';
import { Button } from '@shared/button';
import { ImageIcon } from '@/assets/icons/image';
import { useSelector } from 'react-redux';
import { currSidebarSelector } from '@store/selectors/panels.selectors';
import { useAppDispatch } from '@/hooks/store';
import { useEffect, useState } from 'react';
import { Text } from '@shared/typography/text';

type SidebarProps = {
  className?: string;
};

export const Sidebar = ({ className }: SidebarProps) => {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const currSidebar = useSelector(currSidebarSelector);

  useEffect(() => {
    handleTabChange(activeTab);
  }, [activeTab]);

  const handleTabChange = (value: string | null) => {
    dispatch({ type: 'panels/setCurrentSidebar', payload: value });
  };

  const handleSidebarClick = (value: string) => {
    if (activeTab === value) setActiveTab(null);
    else setActiveTab(value);
  };

  return (
    <div className={cn(styles.root, className)}>
      <div>
        <Button
          type='transparent'
          rightAddon={<BookIcon width={20} />}
          icon
          className={cn(styles.button, { [styles.active]: currSidebar === 'book-info' })}
          onClick={() => handleSidebarClick('book-info')}
        />
        <Text className={styles.text} size={10}>
          General
        </Text>
      </div>
      <div>
        <Button
          type='transparent'
          rightAddon={<ImageIcon width={20} />}
          icon
          className={cn(styles.button, { [styles.active]: currSidebar === 'background' })}
          onClick={() => handleSidebarClick('background')}
        />
        <Text className={styles.text} size={10}>
          BG
        </Text>
      </div>
    </div>
  );
};
