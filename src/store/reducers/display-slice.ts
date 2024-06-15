import { ActionTypes } from '@store/action-types';

const initialState = {
  title: {
    value: '',
    position: {
      x: 0,
      y: 0,
    },
  },
  author: {
    value: '',
    position: {
      x: 0,
      y: 0,
    },
  },
  year: {
    value: '',
    position: {
      x: 0,
      y: 0,
    },
  },
  series: {
    value: '',
    position: {
      x: 0,
      y: 0,
    },
  },
};

export default function displayReducer(
  state = initialState,
  action: { type: string; payload: any },
) {
  const ActionCategoryName = action.type.split('/')[0];
  const ActionCategory = ActionTypes.DISPLAY[ActionCategoryName];

  if (ActionCategory) {
    switch (action.type) {
      case ActionCategory.SET_VALUE:
        return {
          ...state,
          [ActionCategoryName]: {
            ...state[ActionCategoryName],
            value: action.payload,
          },
        };

      default:
        return state;
    }
  }

  return state;
}
