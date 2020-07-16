import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import * as firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyBB25goiLatu2llidkDPvdZKNTgn8Gmme0',
  authDomain: 'todoapp-2ac32.firebaseapp.com',
  databaseURL: 'https://todoapp-2ac32.firebaseio.com',
  projectId: 'todoapp-2ac32',
  storageBucket: 'todoapp-2ac32.appspot.com',
  messagingSenderId: '711664306135',
  appId: '1:711664306135:web:f4c4549822edd03ef7ed92',
  measurementId: 'G-FT8K6CQ7TT',
};
firebase.initializeApp(config);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
