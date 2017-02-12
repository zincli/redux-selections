'use strict';

import * as actions from '../src/actions';
import itemSelections from '../src/reducers';
import { isSelected, allSelected } from '../src/selectors';

const defaultSelections = [
  { id: 'item1', selected: false },
  { id: 'item2', selected: false },
  { id: 'item3', selected: false }
];

describe('Action & Reducers', () => {
  describe('itemSelections(state, action)', () => {
    describe('INIT_SELECTIONS', () => {
      it('should initialize/reset the selections', () => {
        const action = actions.initSelections(defaultSelections);
        itemSelections({}, action)
          .should.eql(defaultSelections);
      });
    });

    describe('TOGGLE_SELECTION', () => {
      it('should toggle the selection of {id}', () => {
        const action = actions.toggleSelection('item1');
        isSelected(
          itemSelections(defaultSelections, action),
          'item1'
        ).should.equal(true);
      });
    });

    describe('TOGGLE_ALL_SELECTION', () => {
      it('should toggle the selection of all items', () => {
        allSelected(
          itemSelections(defaultSelections, actions.toggleAllSelection())
        ).should.equal(true);
      });
      it('should select all items if not all selected', () => {
        const selections = [
          { id: 'item1', selected: false },
          { id: 'item2', selected: true },
          { id: 'item3', selected: false }
        ];
        allSelected(
          itemSelections(selections, actions.toggleAllSelection())
        ).should.equal(true);
      });
      it('should deselect all items if all selected', () => {
        const selections = [
          { id: 'item1', selected: true },
          { id: 'item2', selected: true },
          { id: 'item3', selected: true }
        ];
        allSelected(
          itemSelections(selections, actions.toggleAllSelection())
        ).should.equal(false);
      });
    });

    describe('SET_SELECTION', () => {
      it('should set the selection of {id} to false', () => {
        const action = actions.setSelection({ id: 'item1', selected: false });
        isSelected(
          itemSelections(defaultSelections, action),
          'item1'
        ).should.equal(false);
      });
      it('should set the selection of {id} to true', () => {
        const action = actions.setSelection({ id: 'item1', selected: true });
        isSelected(
          itemSelections(defaultSelections, action),
          'item1'
        ).should.equal(true);
      });
    });

    describe('SET_ALL_SELECTION', () => {
      it('should set the selection of all to false', () => {
        const action = actions.setAllSelection(false);
        allSelected(
          itemSelections(defaultSelections, action)
        ).should.equal(false);
      });
      it('should set the selection of all to true', () => {
        const action = actions.setAllSelection(true);
        allSelected(
          itemSelections(defaultSelections, action)
        ).should.equal(true);
      });
    });

    describe('NOT_RELATED_ACTION', () => {
      it('should return the state', () => {
        itemSelections(defaultSelections, { type: 'NOT_RELATED_ACTION' })
          .should.equal(defaultSelections);
      });
    });

    describe('given undefined state', () => {
      it('should return an empty object', () => {
        itemSelections(undefined, { type: 'NOT_RELATED_ACTION' }).should.eql([]);
      });
    });
  });
});
