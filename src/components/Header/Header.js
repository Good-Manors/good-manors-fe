import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';
import Logo from '../Logo/Logo';

export default function Header() {
  return (
    <header className={styles.Header}>
      <Logo />
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/about-us">About Us</Link>
      </nav>
    </header >
  );
}
