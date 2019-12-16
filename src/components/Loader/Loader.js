import React from 'react';
import styles from './Loader.css';
import loader from '../../assets/loader.gif';

const Loader = () => {

  return (
    <div className={styles.Loader}>
      <div className={styles.loaderContainer}>
        <img src={loader} />
      </div>
    </div>
  );
};

export default Loader;
