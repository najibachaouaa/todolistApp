import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../store/actions';

const AddTodo = ({ dispatch }) => {
  var input;
const handleSubmit=(e)=>{
   
        e.preventDefault();

        if (!input.value.trim()) {
          return
        }

        dispatch(addTodo(input.value));
        input.value='';
      }


  return (
    <div>
      <form   onSubmit={handleSubmit}>
      

        <input type="text" ref={el => (input = el)} />
        <button type='submit'>Add Todo</button>
      </form>
    </div>
  );
}

export default connect()(AddTodo);