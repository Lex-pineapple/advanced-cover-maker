import { combineReducers } from '@reduxjs/toolkit';
import currentItemReducer from '@store/reducers/current-item-slice';
import formReducer from '@store/reducers/form-slice';
import itemArrayReducer from '@store/reducers/item-array-slice';

const rootReducer = combineReducers({
  form: formReducer,
  itemArray: itemArrayReducer,
  currentItem: currentItemReducer,
});

export default rootReducer;
