export enum FieldTypes {
  AUTHOR = 'author',
  TITLE = 'title',
  YEAR = 'year',
  SERIES = 'series',
}

export const setValueAction = (value: string, type: FieldTypes) => ({
  payload: value,
  type: `${type}/setValue`,
});
