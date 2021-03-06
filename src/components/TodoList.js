import React from "react";
import PropTypes from "prop-types";
import { Todo } from "./Todo";

export const TodoList = ({ todos, removeTodo }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => removeTodo(todo.id)} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      input: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  removeTodo: PropTypes.func.isRequired
};
