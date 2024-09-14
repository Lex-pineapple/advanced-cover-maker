import { ItemType } from '@store/reducers/current-item-slice';
import { ItemActions } from '../action-types';

const initialState: ItemType[] = [];

export default function itemArrayReducer(
  state = initialState,
  action: { type: ItemActions; payload: ItemType },
): ItemType[] {
  switch (action.type) {
    case 'item/addNewItem':
      return [
        ...state,
        action.payload
          ? { ...action.payload }
          : {
              key: state.length,
              options: {
                font: 'Roboto',
                color: 'black',
                fontSize: 12,
                effects: {
                  bold: false,
                  italic: false,
                },
              },
            },
      ];
    case 'item/updateItem': {
      return state.map((item) => {
        if (item.key === action.payload.key) return action.payload;
        return item;
      });
    }
    default:
      return state;
  }
}
