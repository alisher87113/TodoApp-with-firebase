import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { connect } from 'react-redux';
import * as firebase from 'firebase';

const SignUpModal = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Modal
      show={props.signUpShow}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter center ">
          Sing Up
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                className="form-control left"
                type="email"
                name="email"
                placeholder="example@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="p">Password:</label>
              <input
                className="form-control left"
                type="password"
                name="password"
                placeholder="123456"
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                className="btn btn-primary btnStyled"
                type="submit"
                value="Register"
              />
            </div>
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={props.toggleShowSignUp} className="btn btn-primary">
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    signUpShow: state.signUpShow,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleShowSignUp: () => dispatch({ type: 'TOGGLE_SHOW_SIGN_UP' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpModal);
