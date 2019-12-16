import React from 'react';
import PropTypes from 'prop-types';

const KeyValueEdit = ({ entryKey, value, handleKeyValueChange, index }) => {


  return (

    <p>{entryKey}: <input type='text' name='value' data-index={index} value={value} onChange={handleKeyValueChange} /></p>


  );

};

KeyValueEdit.propTypes = {
  index: PropTypes.number,
  entryKey: PropTypes.string,
  value: PropTypes.string,
  handleKeyValueChange: PropTypes.func,
  handleUpdate: PropTypes.func
};

export default KeyValueEdit;
