import { createSelector } from '@reduxjs/toolkit';

export const appStore = (store) => {
  return store.app;
};

export const otherNotesSelector = createSelector(
  appStore,
  (store) => store.otherNotes
);
