import { configureStore } from '@reduxjs/toolkit';
import staffSlice from './slices/staffSlice';

export const store = configureStore({
  reducer: {
    staffSlice,
  },
});
