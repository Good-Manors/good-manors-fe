import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ text, title }) => {


  return (
    <div>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );

};

Text.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string
};

export default Text;
