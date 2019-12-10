import React from 'react';
import styles from './Search.css';
import searchIcon from '../assets/temp-icon.png';

export default function Search() {
  return (
    <div className={styles.Search}>
      <img src={searchIcon} />
      <p>search keyword</p>
    </div>
  );
}
