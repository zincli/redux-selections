import { createAction } from 'redux-actions';

export const TYPES = {
  INIT_SELECTIONS: 'INIT_SELECTIONS',
  TOGGLE_SELECTION: 'TOGGLE_SELECTION',
  TOGGLE_ALL_SELECTION: 'TOGGLE_ALL_SELECTION',
  SET_SELECTION: 'SET_SELECTION',
  SET_ALL_SELECTION: 'SET_ALL_SELECTION',
};

export function initSelections({ selections }) {
  return {
    type: TYPES.INIT_SELECTIONS,
    selections,
  };
}

export function toggleSelection({ id }) {
  return {
    type: TYPES.TOGGLE_SELECTION,
    id,
  };
}

export function toggleAllSelection() {
  return {
    type: TYPES.TOGGLE_ALL_SELECTION
  };
}

export function setSelection({ id, selected }) {
  return {
    type: TYPES.SET_SELECTION,
    id,
    selected,
  };
}

export function setAllSelection({ selected }) {
  return {
    type: TYPES.SET_ALL_SELECTION,
    selected,
  };
}
