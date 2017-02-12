'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _handleActions;

var _reduxActions = require('redux-actions');

var _actions = require('./actions');

var _selectors = require('./selectors');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, _actions.TYPES.INIT_SELECTIONS, function (state, action) {
  return action.payload.map(function (item) {
    return Object.assign({}, item);
  });
}), _defineProperty(_handleActions, _actions.TYPES.TOGGLE_SELECTION, function (state, action) {
  return setSelection(state, action.payload, function (itemSelected) {
    return !itemSelected;
  });
}), _defineProperty(_handleActions, _actions.TYPES.TOGGLE_ALL_SELECTION, function (state) {
  return toggleAllSelection(state);
}), _defineProperty(_handleActions, _actions.TYPES.SET_SELECTION, function (state, _ref) {
  var payload = _ref.payload;
  return setSelection(state, payload.id, payload.selected);
}), _defineProperty(_handleActions, _actions.TYPES.SET_ALL_SELECTION, function (state, action) {
  return setAllSelection(state, action.payload);
}), _handleActions), []);


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
  return selections.map(function (_ref2) {
    var id = _ref2.id;
    return { id: id, selected: selected };
  });
}

function isFunction(o) {
  return typeof o === 'function';
}