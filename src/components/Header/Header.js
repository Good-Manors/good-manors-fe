import React from 'react';
import styles from './Header.css';
import Logo from '../Logo/Logo';

export default function Header() {
  return (
    <header className={styles.Header}>
      <Logo />
    </header >
  );
}
