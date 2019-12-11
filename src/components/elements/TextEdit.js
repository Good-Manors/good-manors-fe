import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ title, text, handleChange }) => {


  return (
    <div>
      <h4>{title}</h4>
      <textarea value={text} name='text' onChange={handleChange}></textarea>
    </div>

  );

};

Text.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
  handleChange: PropTypes.func,
  handleUpdate: PropTypes.func
};

export default Text;
