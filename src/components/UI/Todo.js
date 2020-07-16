import React from 'react';

const Todo = (props) => {
  return (
    <div className="card card-custom">
      <div className="card-body">
        <span style={{ fontSize: '23px' }} className="card-text">
          {props.todo.todo}
        </span>
        <button className="btn btn-primary delButton">Delete</button>
      </div>
    </div>
  );
};

export default Todo;
