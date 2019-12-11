// import { slide as Menu } from 'react-burger-menu';

// class Menu extends React.Component {
//   showSettings(event) {
//     event.preventDefault();
//   }

//   render() {
//     // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
//     return (
//       <Menu right>
//         <a id="home" className="menu-item" href="/">Home</a>
//         <a id="about" className="menu-item" href="/about">About</a>
//       </Menu>
//     );
//   }
// }

import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Menu.css';
import { getSessionUsername } from '../selectors/sessionSelectors';

export default function Menu() {

  const username = useSelector(getSessionUsername);

  return (
    <div className={styles.Menu}>
      <h5>hi, {username}</h5>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/home">Home</Link>
        <Link to="/about-us">About Us</Link>
      </nav>
    </div>
  );
}
