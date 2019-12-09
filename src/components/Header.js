import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

export default function Header() {
  return (
    <header className={styles.Header}>
      <img src="src/assets/good-manors-logo.png" />
      <div id="app"></div>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/about-us">About Us</Link>
      </nav>
    </header >
  );
}