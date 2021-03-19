import React from "react";
import { TodoList } from "../components/TodoList";
import { useTodosStore } from "../store";

export const ShowTodoList = () => {
  const { todos, removeTodo } = useTodosStore();
  return <TodoList todos={todos} removeTodo={removeTodo} />;
};