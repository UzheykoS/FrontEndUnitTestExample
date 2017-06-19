import * as React from "react";
import * as ReactDOM from "react-dom";
import { mount, shallow } from 'enzyme';
import { expect, assert } from 'chai';
import configureStore from 'redux-mock-store';
import * as sinon from 'sinon';
import { Provider } from 'react-redux'
import * as _ from "lodash"

import * as actions from '../src/todos/actions';

describe('actions', () => {
  it('creates new todo', () => {
    const { payload: todo } = actions.addTodo('hello');

    expect(todo.text).to.eq('hello');
  });

  it('deletes todo', () => {
    const { payload: todo } = actions.deleteTodo({
      id: 999,
      text: '',
      completed: false
    });

    expect(todo.id).to.eq(999);
  });

  it('edits todo', () => {
    const { payload: todo } = actions.editTodo({
      id: 999,
      text: 'hi',
      completed: false
    }, 'bye');
    expect(todo).to.deep.eq({ id: 999, text: 'bye', completed: false});
  });

  it('completes todo', () => {
    const { payload: todo } = actions.completeTodo({
      id: 999,
      text: '',
      completed: false
    });

    expect(todo.id).to.eq(999);
  });
});
