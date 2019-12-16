import React from 'react';
import PropTypes from 'prop-types';

const KeyValue = ({ entryKey, value }) => {

  return (
    <p>{entryKey}: {value}</p>
  );

};

KeyValue.propTypes = {
  entryKey: PropTypes.string,
  value: PropTypes.string
};

export default KeyValue;
