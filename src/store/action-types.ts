export type ActionCategoryParams = {
  SET_VALUE: string;
  SET_POSITION: string;
  SET_POSITION_X: string;
  SET_POSITION_Y: string;
};

function getTemplateValues(name: string) {
  return {
    SET_VALUE: `${name}/setValue`,
    SET_POSITION: `${name}/setPosition`,
    SET_POSITION_X: `${name}/setPositionX`,
    SET_POSITION_Y: `${name}/setPositionY`,
  };
}

function generateActionTypes(entries: string[]) {
  const ActionTypes: { [key: string]: ActionCategoryParams } = {};

  entries.forEach((item) => {
    ActionTypes[item] = getTemplateValues(item);
  });

  return ActionTypes;
}

const ActionEntries = ['title', 'author', 'year', 'series'];

export const ActionTypes = {
  DISPLAY: generateActionTypes(ActionEntries),
};
