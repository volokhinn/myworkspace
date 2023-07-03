import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notes: [],
};

export const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote(state, action) {
      state.notes.push({
        id: new Date().getTime(),
        text: action.payload,
      });
      console.log(action.payload);
      localStorage.setItem('notes', JSON.stringify(state.notes) ?? '[]');
    },

    removeNote(state, action) {
      state.notes = state.notes.filter((notes) => notes.id !== action.payload.id);
      console.log(action.payload.id);
      localStorage.setItem('notes', JSON.stringify(state.notes) ?? '[]');
    },

    editNote(state, action) {
      const card = state.notes.find((card) => card.id === action.payload.id);
      if (card) {
        card.text = action.payload.area;
      }
      console.log(action.payload.area);
    },

    fetchNotes(state) {
      state.notes = JSON.parse(localStorage.getItem('notes') ?? '[]');
    },

    clearNotes(state) {
      localStorage.removeItem('notes', JSON.stringify(state.notes) ?? '[]');
    },
  },
});

export const selectNoteData = (state) => state.noteSlice;

export const findNoteById = (id) => (state) => state.notes.notes.filter((obj) => obj.id === id);

export const { addNote, removeNote, editNote, fetchNotes, clearNotes } = noteSlice.actions;

export default noteSlice.reducer;
