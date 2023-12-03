import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AstronomicalObject } from '../types/AstronomicalObject.type';

interface AstranomObjectState {
  loading: boolean;
  error: string;
  astonomObject: AstronomicalObject[];
}

const initialState: AstranomObjectState = {
  loading: false,
  error: '',
  astonomObject: [],
};

export const astranomObjectSlie = createSlice({
  name: 'astranomObject',
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSuccess(state, action: PayloadAction<AstronomicalObject[]>) {
      state.loading = false;
      state.astonomObject = action.payload;
    },
    fetchError(state, action: PayloadAction<Error>) {
      (state.loading = false), (state.error = action.payload.message);
    },
  },
});

export const { fetching, fetchSuccess, fetchError } =
  astranomObjectSlie.actions;

export default astranomObjectSlie.reducer;
