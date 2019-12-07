import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ text }) => {


  return (
    <>
      <pre>{text}</pre>
    </>
  );

};

Text.propTypes = {
  text: PropTypes.string
};

export default Text;
