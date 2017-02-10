'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = itemSelections;

var _actions = require('./actions');

var _selectors = require('./selectors');

function itemSelections() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = action.type,
      id = action.id,
      selected = action.selected,
      _action$selections = action.selections,
      selections = _action$selections === undefined ? [] : _action$selections;


  switch (type) {
    case _actions.TYPES.INIT_SELECTIONS:
      return selections.map(function (item) {
        return Object.assign({}, item);
      });
    case _actions.TYPES.TOGGLE_SELECTION:
      return setSelection(state, id, function (itemSelected) {
        return !itemSelected;
      });
    case _actions.TYPES.TOGGLE_ALL_SELECTION:
      return toggleAllSelection(state);
    case _actions.TYPES.SET_SELECTION:
      return setSelection(state, id, selected);
    case _actions.TYPES.SET_ALL_SELECTION:
      return setAllSelection(state, selected);
    default:
      return state;
  }
}

function setSelection(selections, id, selected) {
  return selections.map(function (item) {
    if (item.id === id) {
      return {
        id: id,
        selected: isFunction(selected) ? selected(item.selected) : selected
      };
    }
    return item;
  });
}

function toggleAllSelection(selections) {
  var selected = (0, _selectors.allSelected)(selections);
  return setAllSelection(selections, !selected);
}

function setAllSelection(selections, selected) {
  return selections.map(function (_ref) {
    var id = _ref.id;
    return { id: id, selected: selected };
  });
}

function isFunction(o) {
  return typeof o === 'function';
}