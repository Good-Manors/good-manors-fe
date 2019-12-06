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
      <h3>Activity Log</h3>
      {displayedEntries}
    </>
  );

};

Log.propTypes = {
  logEntries: PropTypes.array
};

export default Log;
