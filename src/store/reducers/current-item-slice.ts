import { CurrentItemActions } from '@store/action-types';

type AlignmentType = 'left' | 'center' | 'right';

export type ItemTypeOptions = {
  font: string;
  color: string;
  fontSize: number;
  position?: {
    x: string;
    y: string;
  };
  effects: {
    bold: boolean;
    italic: boolean;
  };
  alignment?: {
    vertical?: AlignmentType;
    horizontal?: AlignmentType;
  };
};

export type ItemType = {
  key: number;
  options: ItemTypeOptions;
};

const initialState: ItemType = {
  key: 0,
  options: {
    font: 'Roboto',
    color: 'black',
    fontSize: 12,
    effects: {
      bold: false,
      italic: false,
    },
  },
};

export default function currentItemReducer(
  state = initialState,
  action: { type: CurrentItemActions; payload: any },
): ItemType {
  switch (action.type) {
    case 'currItem/setCurrItem':
      return {
        ...state,
        ...action.payload,
      };
    case 'currItem/setAlignment':
      return {
        ...state,
        options: {
          ...state.options,
          alignment: action.payload,
        },
      };
    default:
      return state;
  }
}
