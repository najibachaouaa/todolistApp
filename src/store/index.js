import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

import { selectDisplayedTodos, selectVisibilityFilter } from "./selectors";
import { setVisibilityFilter, removeTodo, addTodo } from "./actions";

export const useTodosStore = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectDisplayedTodos);
  const visibilityFilter = useSelector(selectVisibilityFilter);

  const _addTodo = useCallback(input => dispatch(addTodo(input)), [dispatch]);
  const _setVisibilityFilter = useCallback(
    filter => dispatch(setVisibilityFilter(filter)),
    [dispatch]
  );
  const _removeTodo = useCallback(id => dispatch(removeTodo(id)), [dispatch]);

  return {
    todos,
    visibilityFilter,
    addTodo: _addTodo,
    setVisibilityFilter: _setVisibilityFilter,
    removeTodo: _removeTodo
  };
}