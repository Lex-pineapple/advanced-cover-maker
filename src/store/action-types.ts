export const formActionTypes = [
  'form/setAuthor',
  'form/setYear',
  'form/setTitle',
  'form/setSize',
  'form/setSeries',
  'form/setForm',
] as const;

export type FormActions = (typeof formActionTypes)[number];

export const itemActionTypes = ['item/addNewItem', 'item/updateItem'];

export type ItemActions = (typeof itemActionTypes)[number];

export const currentItemActionTypes = ['currItem/setCurrItem', 'currItem/setAlignment'] as const;

export type CurrentItemActions = (typeof currentItemActionTypes)[number];
