import React from "react";
import PropTypes from "prop-types";
import '../App.css';
export const Todo = ({ onClick, completed, input }) => (
  <div>
     <li className="todo"
     onClick={onClick}
    style={{
    
      textDecoration: completed ? "line-through" : "none"
    }}
  > 
    {input}
  </li>
  </div>
 
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  input: PropTypes.string.isRequired
};