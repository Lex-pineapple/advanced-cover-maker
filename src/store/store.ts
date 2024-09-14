import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '@store/reducer';

const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
export default store;
