import { combineReducers } from '@reduxjs/toolkit';
import displayReducer from '@store/reducers/display-slice';

const rootReducer = combineReducers({
  display: displayReducer,
  // settings: ,
});

export default rootReducer;
