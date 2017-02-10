export function allSelected(selections = []) {
  if (selections.length) {
    return selections.every(item => item.selected);
  }
  return false;
}

export function isSelected(selections = [], id) {
  const target = selections.find(item => item.id === id);
  return !!target && target.selected;
}

export function selectedIds(selections = []) {
  return selections.filter(item => item.selected).map(item => item.id);
}
