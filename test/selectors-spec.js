'use strict';

import { isSelected, allSelected, selectedIds } from '../src/selectors';

describe('Selectors', () => {
  describe('allSelected(selections)', () => {
    describe('given all selected item selections', () => {
      it('should return true', () => {
        const allSelectedItemSelections = [
          { id: 'item1', selected: true },
          { id: 'item2', selected: true },
          { id: 'item3', selected: true }
        ];
        allSelected(allSelectedItemSelections).should.equal(true);
      });
    });
    describe('given not all selected item selections', () => {
      it('should return false', () => {
        const notAllSelectedItemSelections = [
          { id: 'item1', selected: true },
          { id: 'item2', selected: false },
          { id: 'item3', selected: true }
        ];
        allSelected(notAllSelectedItemSelections).should.equal(false);
      });
    });
    describe('given undefined', () => {
      it('should return false', () => {
        allSelected().should.equal(false);
      });
    });
  });

  describe('isSelected(selections, id)', () => {
    const defaultSelections = [
      { id: 'item1', selected: true },
      { id: 'item2', selected: false },
      { id: 'item3', selected: true }
    ];

    describe('given selections and id which is selected', () => {
      it('should return true', () => {
        isSelected(defaultSelections, 'item1').should.equal(true);
      });
    });
    describe('given selections and id which is not selected', () => {
      it('should return false', () => {
        isSelected(defaultSelections, 'item2').should.equal(false);
      });
    });
    describe('given selections and id which not included', () => {
      it('should return false', () => {
        isSelected(defaultSelections, 'item4').should.equal(false);
      });
    });
    describe('given undefined selections', () => {
      it('should return false', () => {
        isSelected(undefined, 'item1').should.equal(false);
      });
    });
  });

  describe('selectedIds(selections)', () => {
    describe('given a selections', () => {
      it('should return selected ids array', () => {
        const selections = [
          { id: 'item1', selected: true },
          { id: 'item2', selected: false },
          { id: 'item3', selected: true }
        ];
        selectedIds(selections).should.eql(['item1', 'item3']);
      });
    });
    describe('given undefined selections', () => {
      it('should return empty array', () => {
        selectedIds().should.eql([]);
      });
    });
  });
});
