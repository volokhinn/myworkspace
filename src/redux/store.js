import { configureStore } from '@reduxjs/toolkit';
import staffSlice from './slices/staffSlice';
import noteSlice from './slices/noteSlice';

export const store = configureStore({
  reducer: {
    staffSlice,
    noteSlice,
  },
});
