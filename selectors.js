"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allSelected = allSelected;
exports.isSelected = isSelected;
exports.selectedIds = selectedIds;
function allSelected() {
  var selections = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  if (selections.length) {
    return selections.every(function (item) {
      return item.selected;
    });
  }
  return false;
}

function isSelected() {
  var selections = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var id = arguments[1];

  var target = selections.find(function (item) {
    return item.id === id;
  });
  return !!target && target.selected;
}

function selectedIds() {
  var selections = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  return selections.filter(function (item) {
    return item.selected;
  }).map(function (item) {
    return item.id;
  });
}