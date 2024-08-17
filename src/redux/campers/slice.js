import { createSlice } from '@reduxjs/toolkit';
import { fetchItems } from './operations.js';

export const slice = createSlice({
  name: 'campers',
  initialState: { campers: [] },
  extraReducers: builder => {
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      console.log(action.payload);
      state.campers = action.payload;
    });
  },
  selectors: { campers: state => state.campers },
});

export const campersReducer = slice.reducer;
export const { loading, error, campers } = slice.selectors;
