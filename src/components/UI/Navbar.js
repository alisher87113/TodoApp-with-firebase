import React from 'react';
import { connect } from 'react-redux';

const Navbar = (props) => {
  return (
    <nav
      className=" navbar navbar-light"
      style={{ backgroundColor: '#e3f2fd' }}
    >
      <div className="container">
        <h2 className="navbar-brand">TodoApp</h2>

        <ul className=" navUl">
          <li className="nav-item">Home</li>
          {props.shouldLogin ? (
            <li className="nav-item" onClick={props.toggleShowSignIn}>
              Log In
            </li>
          ) : (
            <li className="nav-item">Log Out</li>
          )}
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    shouldLogin: state.shouldLogin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleShowSignIn: () => dispatch({ type: 'TOGGLE_SHOW_SIGN_IN' }),
    toggleShowSignUp: () => dispatch({ type: 'TOGGLE_SHOW_SIGN_UP' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
