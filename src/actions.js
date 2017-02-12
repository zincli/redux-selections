import { createActions } from 'redux-actions';

export const TYPES = {
  INIT_SELECTIONS: 'INIT_SELECTIONS',
  TOGGLE_SELECTION: 'TOGGLE_SELECTION',
  TOGGLE_ALL_SELECTION: 'TOGGLE_ALL_SELECTION',
  SET_SELECTION: 'SET_SELECTION',
  SET_ALL_SELECTION: 'SET_ALL_SELECTION',
};

export const {
  initSelections,
  toggleSelection,
  toggleAllSelection,
  setSelection,
  setAllSelection,
} = createActions(
  TYPES.INIT_SELECTIONS,
  TYPES.TOGGLE_SELECTION,
  TYPES.TOGGLE_ALL_SELECTION,
  TYPES.SET_SELECTION,
  TYPES.SET_ALL_SELECTION
);
