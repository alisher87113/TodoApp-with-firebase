import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
const SignInModal = (props) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      props.toggleShowSignIn();
      props.toggleShouldLogin();
    } else {
      return;
    }
  });
  return (
    <Modal
      show={props.signInShow}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter center ">
          Sign In
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input className="form-control left" type="email" name="email" />

              <label htmlFor="p">Password:</label>
              <input
                className="form-control left"
                type="password"
                name="password"
              />
              <input
                className="btn btn-primary btnStyled"
                type="submit"
                value="Sign In"
              />
            </div>
          </form>
        </div>
        <p>
          New here? Then{' '}
          <button
            className="btn btn-sm btn-primary"
            onClick={() => {
              props.toggleShowSignIn();
              props.toggleShowSignUp();
            }}
          >
            Sign Up
          </button>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={props.toggleShowSignIn} className="btn btn-primary">
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    signInShow: state.signInShow,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleShowSignIn: () => dispatch({ type: 'TOGGLE_SHOW_SIGN_IN' }),
    toggleShowSignUp: () => dispatch({ type: 'TOGGLE_SHOW_SIGN_UP' }),
    toggleShouldLogin: () => dispatch({ type: 'TOGGLE_SHOULD_LOGIN' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInModal);
