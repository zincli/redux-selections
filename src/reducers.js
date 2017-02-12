import { handleActions } from 'redux-actions';
import { TYPES } from './actions';
import { allSelected } from './selectors';

export default handleActions({
  [TYPES.INIT_SELECTIONS]:
    (state, action) =>
      action.payload.map(item => (Object.assign({}, item))),
  [TYPES.TOGGLE_SELECTION]:
    (state, action) =>
      setSelection(state, action.payload, itemSelected => !itemSelected),
  [TYPES.TOGGLE_ALL_SELECTION]:
    state => toggleAllSelection(state),
  [TYPES.SET_SELECTION]:
    (state, { payload }) => setSelection(state, payload.id, payload.selected),
  [TYPES.SET_ALL_SELECTION]:
    (state, action) => setAllSelection(state, action.payload),
}, []);

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
