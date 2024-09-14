import { RootState } from '@store/store';

export const currSidebarSelector = (store: RootState) => store.panels.sidebar;
