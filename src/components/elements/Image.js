import React from 'react';
import PropTypes from 'prop-types';
import styles from './Image.css';
import placeholder from '../../assets/placeholder-image.png';

const Image = ({ image }) => {

  if(image === '') image = placeholder;

  return (
    <div className={styles.ImageWrapper}>
      <img className={styles.Image} src={image} />
    </div>
  );

};

Image.propTypes = {
  image: PropTypes.string,
};

export default Image;
