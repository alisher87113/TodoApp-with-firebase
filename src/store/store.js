import { createStore } from 'redux';
import Reducer from '../reducer/Reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export const initialState = {
  todos: [],
  signInShow: false,
  signUpShow: false,
  shouldLogin: true,
};

export const store = createStore(Reducer, composeWithDevTools());
