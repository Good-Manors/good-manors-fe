import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ image }) => {

  return (
    <img src={image} />
  );

};

Image.propTypes = {
  image: PropTypes.string,
};

export default Image;
