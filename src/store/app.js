import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  otherNotes: [],
  pinnedNotes: [],
  archivedNotes: [],
  trashedNotes: [],
  seletedNote: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addOtherNotes(state, action) {
      state.otherNotes = [action.payload, ...state.otherNotes];
    },
    removeOtherNotes(state, action) {
      state.otherNotes = state.otherNotes.filter(
        (item) => item?.id !== action.payload
      );
    },
    setOtherSelected(state, action) {
      state.seletedNote = state.otherNotes.find(
        (item) => item?.id === action.payload
      );
    },
    updateOtherNotes(state, action) {
      const { id, key, value } = action.payload;
      state.otherNotes = state.otherNotes?.map((item) =>
        item.id === id ? { ...item, [key]: value } : item
      );
    },

    updateArchivedNotes(state, action) {
      const { id, key, value } = action.payload;
      state.archivedNotes = state.archivedNotes?.map((item) =>
        item.id === id ? { ...item, [key]: value } : item
      );
    },
    updateTrashedNotes(state, action) {
      const { id, key, value } = action.payload;
      state.trashedNotes = state.trashedNotes?.map((item) =>
        item.id === id ? { ...item, [key]: value } : item
      );
    },
    addPinnedNotes(state, action) {
      state.pinnedNotes = [action.payload, ...state.pinnedNotes];
    },
    addArchivedNotes(state, action) {
      state.archivedNotes = [action.payload, ...state.archivedNotes];
    },
    addTrashedNotes(state, action) {
      state.trashedNotes = [action.payload, ...state.trashedNotes];
    },
    removeTrashedNotes(state, action) {
      state.trashedNotes = state.trashedNotes.filter(
        (item) => item?.id !== action.payload
      );
    },
    restoreTrashedNotes(state, action) {
      state.trashedNotes = state.trashedNotes.filter(
        (item) => item?.id !== action.payload
      );
    },
    unarchiveNotes(state, action) {
      state.archivedNotes = state.archivedNotes.filter(
        (item) => item?.id !== action.payload
      );
    },
    removeArchiveNote(state, action) {
      state.archivedNotes = state.archivedNotes.filter(
        (item) => item?.id !== action.payload
      );
    },
  },
});

export const {
  addOtherNotes,
  addArchivedNotes,
  addPinnedNotes,
  addTrashedNotes,
  removeOtherNotes,
  setOtherSelected,
  updateOtherNotes,
  removeTrashedNotes,
  restoreTrashedNotes,
  unarchiveNotes,
  removeArchiveNote,
  updateArchivedNotes,
  updateTrashedNotes,
} = appSlice.actions;

export default appSlice.reducer;
