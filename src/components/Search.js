import React from 'react';
import PropTypes from 'prop-types';
import styles from './Search.css';
import searchIcon from '../assets/icons/search-icon.png';

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

Search.propTypes = {
  home: PropTypes.object
};

