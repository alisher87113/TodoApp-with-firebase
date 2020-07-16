import React, { useEffect } from 'react';
import './App.css';
import Form from './components/UI/Form';
import Navbar from './components/UI/Navbar';
import Todos from './components/UI/Todos';
import SignInModal from './components/UI/SignInModal';
import SignUpModal from './components/UI/SignUpModal';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import axios from 'axios';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Form />
        <Todos />
        <SignInModal />
        <SignUpModal />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadFormFirebase: (todos) =>
      dispatch({ type: 'ADD_LOADED_TODOS', payload: todos }),
  };
};

export default connect(null, mapDispatchToProps)(App);
