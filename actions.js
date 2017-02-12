'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setAllSelection = exports.setSelection = exports.toggleAllSelection = exports.toggleSelection = exports.initSelections = exports.TYPES = undefined;

var _reduxActions = require('redux-actions');

var TYPES = exports.TYPES = {
  INIT_SELECTIONS: 'INIT_SELECTIONS',
  TOGGLE_SELECTION: 'TOGGLE_SELECTION',
  TOGGLE_ALL_SELECTION: 'TOGGLE_ALL_SELECTION',
  SET_SELECTION: 'SET_SELECTION',
  SET_ALL_SELECTION: 'SET_ALL_SELECTION'
};

var _createActions = (0, _reduxActions.createActions)(TYPES.INIT_SELECTIONS, TYPES.TOGGLE_SELECTION, TYPES.TOGGLE_ALL_SELECTION, TYPES.SET_SELECTION, TYPES.SET_ALL_SELECTION);

var initSelections = _createActions.initSelections,
    toggleSelection = _createActions.toggleSelection,
    toggleAllSelection = _createActions.toggleAllSelection,
    setSelection = _createActions.setSelection,
    setAllSelection = _createActions.setAllSelection;
exports.initSelections = initSelections;
exports.toggleSelection = toggleSelection;
exports.toggleAllSelection = toggleAllSelection;
exports.setSelection = setSelection;
exports.setAllSelection = setAllSelection;