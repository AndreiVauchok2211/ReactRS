import { configureStore } from '@reduxjs/toolkit';
import astranomObjectReducer from './astranomObjectSlie';

const store = configureStore({
  reducer: {
    astranomObjects: astranomObjectReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
