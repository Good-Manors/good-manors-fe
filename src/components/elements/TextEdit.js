import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ title, text, handleTextChange, index }) => {

  return (
    <div>
      <h4>{title}</h4>
      <textarea value={text} name={title} data-index={index} onChange={handleTextChange}></textarea>
    </div>
  );
};

Text.propTypes = {
  index: PropTypes.number,
  text: PropTypes.string,
  title: PropTypes.string,
  handleTextChange: PropTypes.func
};

export default Text;
