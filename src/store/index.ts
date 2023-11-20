import { configureStore } from '@reduxjs/toolkit';
// import astranomObjectReducer from './astranomObjectSlie';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { astronomObjectApi } from './astronomObject/astronomObject.api';

const store = configureStore({
  reducer: {
    [astronomObjectApi.reducerPath]: astronomObjectApi.reducer,
    // astranomObjects: astranomObjectReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(astronomObjectApi.middleware),
});

setupListeners(store.dispatch);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
