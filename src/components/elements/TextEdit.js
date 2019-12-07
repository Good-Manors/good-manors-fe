import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ text, handleChange }) => {


  return (
    <>
      <textarea value={text} name='text' onChange={handleChange}></textarea>
    </>

  );

};

Text.propTypes = {
  text: PropTypes.string,
  handleChange: PropTypes.func,
  handleUpdate: PropTypes.func
};

export default Text;
