import React from 'react';
import styles from './Search.css';
import searchIcon from '../assets/temp-icon.png';

export default function Search({ home }) {
  let title;
  if(home) title = home.title;


  return (
    <section className={styles.Search}>
      <h2>{title || ''}</h2>
      <div>
        <img src={searchIcon} />
        <input type='text' />
          </div>
    </section>
  );
}
