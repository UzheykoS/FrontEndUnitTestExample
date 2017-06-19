import * as React from "react";
import * as ReactDOM from "react-dom";
import { mount, shallow } from 'enzyme';
import { expect, assert } from 'chai';
import configureStore from 'redux-mock-store';
import * as sinon from 'sinon';
import { Provider } from 'react-redux'
import * as _ from "lodash"
import reducer from '../src/todos/reducer';
import { Todo } from '../src/todos/model';

import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL,
  CLEAR_COMPLETED
} from '../src/todos/constants/ActionTypes';

describe('todo reducer', () => {
  it('handles add', () => {
    let state: Todo[] = [{ id: 0, text: '', completed: true }];

    state = reducer(state, {
      type: ADD_TODO,
      payload: { text: 'hello', completed: false }
    });

    expect(state[0]).to.deep.eq(
      { id: 1, text: 'hello', completed: false }
    );
  });

  it('handles delete', () => {
    let state: Todo[] = [{ id: 1, text: '', completed: false }];

    state = reducer(state, {
      type: DELETE_TODO,
      payload: { id: 1 } as Todo
    });

    expect(state).to.deep.eq([]);
  });

  it('handles edit', () => {
    let state: Todo[] = [{ id: 1, text: '', completed: false }];

    state = reducer(state, {
      type: EDIT_TODO,
      payload: { id: 1, text: 'hello' } as Todo
    });

    expect(state[0]).to.deep.eq(
      { id: 1, text: 'hello', completed: false }
    );
  });

  it('handles complete all', () => {

    let state: Todo[] = [
      { id: 1, text: '', completed: false }
    ];

    state = reducer(state, {
      type: COMPLETE_TODO,
      payload: { id: 1 } as Todo
    });

    expect(state[0]).to.deep.eq(
      { id: 1, text: '', completed: true }
    );
  });

  it('handles complete all', () => {
    let state: Todo[] = [
      { id: 1, text: '', completed: false },
      { id: 2, text: '', completed: true },
      { id: 3, text: '', completed: false }
    ];

    state = reducer(state, {
      type: COMPLETE_ALL,
      payload: {} as Todo
    });

    expect(state).to.deep.eq([
      { id: 1, text: '', completed: true },
      { id: 2, text: '', completed: true },
      { id: 3, text: '', completed: true }
    ]);

    state = reducer(state, {
      type: COMPLETE_ALL,
      payload: {} as Todo
    });

    expect(state).to.deep.eq([
      { id: 1, text: '', completed: false },
      { id: 2, text: '', completed: false },
      { id: 3, text: '', completed: false }
    ]);
  });

  it('handles clear completed', () => {
    let state: Todo[] = [
      { id: 1, text: '', completed: false },
      { id: 2, text: '', completed: true }
    ];

    state = reducer(state, {
      type: CLEAR_COMPLETED,
      payload: {} as Todo
    });

    expect(state).to.deep.eq([
      { id: 1, text: '', completed: false }
    ]);
  });
});
