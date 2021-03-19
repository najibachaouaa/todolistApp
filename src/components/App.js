import React from "react";
import AddTodo from "../containers/AddTodo";
import { Filter } from "./Filter";
// import { AddTodo } from "../containers/AddTodo";
import {Card} from 'reactstrap'
import { ShowTodoList } from "../containers/ShowTodoList";

const App = () => (
  <Card className="app">
 
    <AddTodo className="todo"></AddTodo>
    <ShowTodoList></ShowTodoList>
    <Filter></Filter>
  </Card>
);

export default App;