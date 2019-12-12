import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getSessionId } from '../../selectors/sessionSelectors';
import { connect } from 'react-redux';
import { sessionSignup, sessionLogin } from '../../actions/sessionActions';
import styles from './AuthPage.css';
import logo from '../../assets/good-manors-logo.png';

const AuthPage = ({ handleSubmit }) => {
  const sessionId = useSelector(getSessionId);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [member, setMember] = useState(true);

  if(sessionId && member) return <Redirect to='/home' />;
  if(sessionId && !member) return <Redirect to='/' />;
 
  return (
    <section id='signup-login' className={styles.SignupLogin}>
      <div>
        <img src={logo} />
      </div>
      <form className={styles.Form} onSubmit={event => handleSubmit(event, username, password, member)}>
        <input type="text" placeholder='Username' value={username} onChange={({ target }) => setUsername(target.value)} />
        <input type="password" placeholder='Password' value={password} onChange={({ target }) => setPassword(target.value)} />
        <section id='signup-login-toggle' className={styles.Toggle}>
          <span onClick={() => { setMember(!member); }}>{member ? 'Make an account' : 'Already a member?'}</span>
          <button>{member ? 'Login' : 'Signup'}</button>
        </section>
      </form>
    </section>
  );
};

AuthPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  handleSubmit(event, username, password, member) {
    event.preventDefault();
    member ? dispatch(sessionLogin(username, password)) : dispatch(sessionSignup(username, password));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(AuthPage);

