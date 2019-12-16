import React from 'react';
import styles from './Logo.css';
import logo from '../../assets/good-manors-logo.png';

const Logo = () => {

  return (
    <div id='logo-background' className={styles.Logo}>
      <img src={logo} />
    </div>
  );
};


export default Logo;
