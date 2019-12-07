import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getSessionId } from '../../selectors/sessionSelectors';
import { connect } from 'react-redux';
import { sessionLogin } from '../../actions/sessionActions';
import styles from './AuthPage.css';
import logo from '../../assets/neatNOOKS.png';

const AuthPage = ({ buttonText, handleSubmit }) => {
  const sessionId = useSelector(getSessionId);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  if(sessionId) return <Redirect to="/" />;

  return (
    <section id='signup-login' className={styles.SignupLogin}>
      <div>
        <img src={logo} />
      </div>
      <form className={styles.Form} onSubmit={event => handleSubmit(event, username, password)}>
        <input type="text" placeholder='Username' value={username} onChange={({ target }) => setUsername(target.value)} />
        <input type="password" placeholder='Password' value={password} onChange={({ target }) => setPassword(target.value)} />
        <section id='signup-login-toggle' className={styles.Toggle}>
          <span onClick={() => { console.log('clicked'); }}>Already a member?</span>
          <button>{buttonText}</button>
        </section>
      </form>
    </section>
  );
};

AuthPage.propTypes = {
  buttonText: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

const mapStateToProps = () => ({
  buttonText: 'Login'
});

const mapDispatchToProps = dispatch => ({
  handleSubmit(event, username, password) {
    event.preventDefault();
    dispatch(sessionLogin(username, password));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthPage);

