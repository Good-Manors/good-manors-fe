import React from 'react';
import PropTypes from 'prop-types';
import styles from './Image.css';

const Image = ({ image }) => {

  return (
    <div className={styles.Image}>
      <img src={image} />
    </div>
  );

};

Image.propTypes = {
  image: PropTypes.string,
};

export default Image;
