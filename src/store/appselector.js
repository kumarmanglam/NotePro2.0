import { createSelector } from '@reduxjs/toolkit';

export const appStore = (store) => {
  return store.app;
};

export const otherNotesSelector = createSelector(
  appStore,
  (store) => store.otherNotes
);

export const trashNotesSelector = createSelector(
  appStore,
  (store) => store.trashedNotes
);

export const archiveNotesSelector = createSelector(
  appStore,
  (store) => store.archivedNotes
);
