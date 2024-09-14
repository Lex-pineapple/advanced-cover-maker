import { RootState } from '@store/store';

export const itemsArraySelector = (store: RootState) => store.itemArray;
export const currItemSelector = (store: RootState) => store.currentItem;
