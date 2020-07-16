import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as firebase from 'firebase';

const Form = ({ addTodo }) => {
  const [todo, setTodo] = useState('');
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (todo !== '') {
  //     addTodo(todo);
  //   }
  //   setTodo('');
  // };

  const database = firebase.database();
  const rootRef = database.ref('todos');

  const handleSubmit = (e) => {
    e.preventDefault();
    const autoId = rootRef.push().key;
    rootRef.child(autoId).set({
      todoo: todo,
    });
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group form">
          <input
            name="todo"
            type="text"
            className="form-control"
            placeholder="Here your goal goes"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className="btn btn-primary btnStyled" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch({ type: 'ADD_TODO', payload: todo }),
  };
};

export default connect(null, mapDispatchToProps)(Form);
