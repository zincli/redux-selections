import { TYPES } from './actions';
import { allSelected } from './selectors';

export default function itemSelections(state = [], action = {}) {
  const {
    type,
    id,
    selected,
    selections = [],
  } = action;

  switch (type) {
    case TYPES.INIT_SELECTIONS:
      return selections.map(item => (Object.assign({}, item)));
    case TYPES.TOGGLE_SELECTION:
      return setSelection(state, id, itemSelected => !itemSelected);
    case TYPES.TOGGLE_ALL_SELECTION:
      return toggleAllSelection(state);
    case TYPES.SET_SELECTION:
      return setSelection(state, id, selected);
    case TYPES.SET_ALL_SELECTION:
      return setAllSelection(state, selected);
    default:
      return state;
  }
}

function setSelection(selections, id, selected) {
  return selections.map((item) => {
    if (item.id === id) {
      return {
        id,
        selected: isFunction(selected) ? selected(item.selected) : selected
      };
    }
    return item;
  });
}

function toggleAllSelection(selections) {
  const selected = allSelected(selections);
  return setAllSelection(selections, !selected);
}

function setAllSelection(selections, selected) {
  return selections.map(({ id }) => ({ id, selected }));
}

function isFunction(o) {
  return typeof o === 'function';
}
