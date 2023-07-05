import { configureStore } from '@reduxjs/toolkit';
import staffSlice from './slices/staffSlice';
import noteSlice from './slices/noteSlice';
import eventSlice from './slices/eventSlice';
import balanceSlice from './slices/balanceSlice';

export const store = configureStore({
  reducer: {
    staffSlice,
    noteSlice,
    eventSlice,
    balanceSlice,
  },
});
