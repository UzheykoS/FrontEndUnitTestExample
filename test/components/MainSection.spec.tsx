import * as React from "react";
import * as ReactDOM from "react-dom";
import { mount, shallow } from 'enzyme';
import { expect, assert } from 'chai';
import configureStore from 'redux-mock-store';
import * as sinon from 'sinon';
import { Provider } from 'react-redux'

import ConnectedMainSection, { MainSection } from "../../src/todos/components/MainSection"
import { Todo } from '../../src/todos/model';
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from '../../src/todos/constants/TodoFilters';

describe("<MainSection/>", function () {
    let props, container;

    beforeEach(() => {
        props = {
            todos: [],
            clearCompleted: () => { },
            completeAll: () => { },
            completeTodo: (todo: Todo, text: string) => { },
            editTodo: (todo: Todo) => { },
            deleteTodo: (todo: Todo) => { }
        };
    })

    it("should initialize state and render 1 todo item", () => {
        props.todos.push({
            id: 1,
            text: "Test test",
            completed: false
        });

        container = shallow(<MainSection todos={props.todos} clearCompleted={props.clearCompleted} completeAll={props.completeAll}
        completeTodo={props.completeTodo} editTodo={props.editTodo} deleteTodo={props.deleteTodo} />);
        assert.equal(
            container.state('filter'),
            SHOW_ALL
        );
        assert.equal(
            container.find('#todos').get(0).props.children.length,
            props.todos.length
        );
    });

    it("should change filter and render new empty list", () => {
        props.todos.push({
            id: 1,
            text: "Test test",
            completed: false
        });

        container = shallow(<MainSection todos={props.todos} clearCompleted={props.clearCompleted} completeAll={props.completeAll}
        completeTodo={props.completeTodo} editTodo={props.editTodo} deleteTodo={props.deleteTodo} />);

        container.instance().handleShow(SHOW_COMPLETED);
        assert.equal(
            container.state('filter'),
            SHOW_COMPLETED
        );
        assert.equal(
            container.find('#todos').get(0).props.children.length,
            0
        );
    });

    it("should call handleClearCompleted property method", () => {
        const spyHandleClearCompleted = sinon.spy();
        props.clearCompleted = spyHandleClearCompleted;
        props.todos.push({
            id: 1,
            text: "Test test",
            completed: true
        });

        container = shallow(<MainSection todos={props.todos} clearCompleted={props.clearCompleted} completeAll={props.completeAll}
        completeTodo={props.completeTodo} editTodo={props.editTodo} deleteTodo={props.deleteTodo} />);

        container.instance().handleClearCompleted();

        expect(spyHandleClearCompleted.calledOnce).to.be.true;
    });
});