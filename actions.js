'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TYPES = undefined;
exports.initSelections = initSelections;
exports.toggleSelection = toggleSelection;
exports.toggleAllSelection = toggleAllSelection;
exports.setSelection = setSelection;
exports.setAllSelection = setAllSelection;

var _reduxActions = require('redux-actions');

var TYPES = exports.TYPES = {
  INIT_SELECTIONS: 'INIT_SELECTIONS',
  TOGGLE_SELECTION: 'TOGGLE_SELECTION',
  TOGGLE_ALL_SELECTION: 'TOGGLE_ALL_SELECTION',
  SET_SELECTION: 'SET_SELECTION',
  SET_ALL_SELECTION: 'SET_ALL_SELECTION'
};

function initSelections(_ref) {
  var selections = _ref.selections;

  return {
    type: TYPES.INIT_SELECTIONS,
    selections: selections
  };
}

function toggleSelection(_ref2) {
  var id = _ref2.id;

  return {
    type: TYPES.TOGGLE_SELECTION,
    id: id
  };
}

function toggleAllSelection() {
  return {
    type: TYPES.TOGGLE_ALL_SELECTION
  };
}

function setSelection(_ref3) {
  var id = _ref3.id,
      selected = _ref3.selected;

  return {
    type: TYPES.SET_SELECTION,
    id: id,
    selected: selected
  };
}

function setAllSelection(_ref4) {
  var selected = _ref4.selected;

  return {
    type: TYPES.SET_ALL_SELECTION,
    selected: selected
  };
}