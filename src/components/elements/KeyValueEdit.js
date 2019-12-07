import React from 'react';
import PropTypes from 'prop-types';

const KeyValueEdit = ({ entryKey, value, handleChange }) => {


  return (
    <>
      <p>{entryKey}: <input type='text' name='value' value={value} onChange={handleChange} /></p>
    </>

  );

};

KeyValueEdit.propTypes = {
  entryKey: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  handleUpdate: PropTypes.func
};

export default KeyValueEdit;
