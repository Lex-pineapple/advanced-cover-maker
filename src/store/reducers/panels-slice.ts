import { PanelsActions } from '../action-types';

type PanelsType = {
  sidebar: 'settings' | 'book-info' | 'background' | null;
};

const initialState: PanelsType = {
  sidebar: null,
};

export default function panelsReducer(
  state = initialState,
  action: { type: PanelsActions; payload: any },
): PanelsType {
  switch (action.type) {
    case 'panels/setCurrentSidebar':
      return { ...state, sidebar: action.payload };
    default:
      return state;
  }
}
