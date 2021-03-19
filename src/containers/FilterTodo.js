import React from "react";
import { Link } from "../components/Link";
import { useTodosStore } from "../store";

export const FilterTodo= ({ filter, children }) => {
  const { visibilityFilter, setVisibilityFilter } = useTodosStore();
  console.log(visibilityFilter);
  return (
    <Link
      active={visibilityFilter === filter}
      onClick={() => setVisibilityFilter(filter)}
      children={children}
    />
  );
};