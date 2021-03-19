import React from "react";
import { FilterTodo } from "../containers/FilterTodo";
import { VisibilityFilters } from "../store/actions";

export const Filter = () => (
  <div>
    <span>Show: </span>
    <FilterTodo filter={VisibilityFilters.SHOW_ALL}>All</FilterTodo>
    <FilterTodo filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterTodo>
    <FilterTodo filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterTodo>
    </div>
);