import React from 'react';
import PropTypes from 'prop-types';

const Log = ({ logEntries }) => {

  const displayedEntries = logEntries.map((entry, i) => {
    return (
      <>
        <p key={i}>{entry}</p>
        <hr />
      </>
    );
  });

  return (
    <>
      <h4>Activity Log</h4>
      {displayedEntries}
    </>
  );

};

Log.propTypes = {
  logEntries: PropTypes.array
};

export default Log;
