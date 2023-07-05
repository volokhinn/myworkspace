import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  events: [],
};

export const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvent(state, action) {
      state.events.push({
        id: action.payload.id,
        text: action.payload.text,
        date: action.payload.date,
        time: action.payload.time,
        emoji: action.payload.emoji,
      });
      localStorage.setItem('events', JSON.stringify(state.events) ?? '[]');
    },

    removeEvent(state, action) {
      state.events = state.events.filter((events) => events.id !== action.payload.id);
      localStorage.setItem('events', JSON.stringify(state.events) ?? '[]');
    },

    editEvent(state, action) {
      const card = state.events.find((card) => card.id === action.payload.id);
      if (card) {
        card.text = action.payload.area;
        card.date = action.payload.areadate;
        card.time = action.payload.areatime;
      }
      localStorage.setItem('events', JSON.stringify(state.events) ?? '[]');
    },

    fetchEvents(state) {
      state.events = JSON.parse(localStorage.getItem('events') ?? '[]');
    },

    clearEvents(state) {
      localStorage.removeItem('events', JSON.stringify(state.events) ?? '[]');
    },
  },
});

export const selectEventData = (state) => state.eventSlice;

export const findNoteById = (id) => (state) => state.events.events.filter((obj) => obj.id === id);

export const { addEvent, removeEvent, editEvent, fetchEvents, clearEvents } = eventSlice.actions;

export default eventSlice.reducer;
