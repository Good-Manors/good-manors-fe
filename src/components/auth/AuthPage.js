import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getSessionId } from '../../selectors/sessionSelectors';
import { connect } from 'react-redux';
import { sessionSignup, sessionLogin } from '../../actions/sessionActions';
import styles from './AuthPage.css';
import logo from '../../assets/good-manors-logo.png';
import deck from '../../assets/img-horizontal/deck.jpg';
import garden from '../../assets/img-horizontal/garden.jpg';
import bedroom from '../../assets/img-horizontal/bedroom.jpg';
import dining from '../../assets/img-horizontal/dining.jpg';
import houseplants from '../../assets/img-horizontal/houseplants.jpg';
import nursery from '../../assets/img-horizontal/nursery.jpg';
import livingRoom from '../../assets/img-horizontal/livingRoom.jpg';

const bgImageArray = [deck, garden, bedroom, dining, houseplants, nursery, livingRoom];

// const bgImageArray = ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/full-lonely.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/full-carezza-lake.jpg'];

const AuthPage = ({ handleSubmit }) => {
  const sessionId = useSelector(getSessionId);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [member, setMember] = useState(true);

  const bgRef = useRef(null);

  const [bg1, setBg1] = useState(0);
  const [bg2, setBg2] = useState(1);
  const [bgCurrent, setBgCurrent] = useState('bg1');

  useEffect(() => {
    const bgMap = {
      bg1,
      bg2
    };

    setTimeout(() => {
      if(!bgRef.current) return;
      bgRef.current.style.background = `url(${bgImageArray[bgMap[bgCurrent]]}) no-repeat center center fixed`;
      bgRef.current.style.backgroundSize = 'cover';

      if(bgCurrent === 'bg1') {
        setBgCurrent('bg2');
        if(bg1 + 2 >= bgImageArray.length && bg2 === 0) {
          setBg1(1);
        } else if(bg1 + 2 >= bgImageArray.length) {
          setBg1(0);
        } else {
          setBg1(bg1 + 2);
        }
      }

      if(bgCurrent === 'bg2') {
        setBgCurrent('bg1');
        if(bg2 + 2 >= bgImageArray.length && bg1 === 0) {
          setBg2(1);
        } else if(bg2 + 2 >= bgImageArray.length) {
          setBg2(0);
        } else {
          setBg2(bg2 + 2);
        }
      }
    }, 6000);
  }, [bgCurrent]);

  if(sessionId) return <Redirect to="/" />;

  return (
    <section id='signup-login' className={styles.SignupLogin}>
      <div className={styles.Before} ref={bgRef}></div>
      <div className={styles.logoDiv}>
        <img src={logo} />
      </div>
      <form className={styles.Form} onSubmit={event => handleSubmit(event, username, password, member)}>
        <p><span className={styles.Light}>home management</span><span> made simple</span></p>
        <input type="text" placeholder='Username' value={username} onChange={({ target }) => setUsername(target.value)} />
        <input type="password" placeholder='Password' value={password} onChange={({ target }) => setPassword(target.value)} />
        <section id='signup-login-toggle' className={styles.Toggle}>
          <span onClick={() => { setMember(!member); }}>{member ? 'Make an account' : 'Already a member?'}</span>
          <button>{member ? 'Login' : 'Signup'}</button>
        </section>
      </form>
      <img src={deck} className={styles.Invisible} />
      <img src={garden} className={styles.Invisible} />
      <img src={bedroom} className={styles.Invisible} />
      <img src={dining} className={styles.Invisible} />
      <img src={houseplants} className={styles.Invisible} />
      <img src={nursery} className={styles.Invisible} />
      <img src={livingRoom} className={styles.Invisible} />
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

