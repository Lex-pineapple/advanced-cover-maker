import { FormActions } from '../action-types';

const initialState = {
  title: '',
  series: '',
  year: 0,
  author: '',
  size: '',
};

export default function formReducer(
  state = initialState,
  action: { type: FormActions; payload: any },
): typeof initialState {
  switch (action.type) {
    case 'form/setAuthor':
      return { ...state, author: action.payload };
    case 'form/setSeries':
      return { ...state, series: action.payload };
    case 'form/setSize':
      return { ...state, size: action.payload };
    case 'form/setTitle':
      return { ...state, title: action.payload };
    case 'form/setYear':
      return { ...state, year: action.payload };
    case 'form/setForm':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
