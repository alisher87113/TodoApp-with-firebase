import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

const Todos = (props) => {
  console.log(props.todos);
  return props.todos.map((todo, index) => <Todo todo={todo} key={index} />);
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps)(Todos);
