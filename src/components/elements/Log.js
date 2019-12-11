import React from 'react';
import PropTypes from 'prop-types';

const Log = ({ logEntries, title }) => {

  const displayedEntries = logEntries.map((entry, i) => {
    return (
      <>
        <p key={i}>{entry}</p>
        <hr />
      </>
    );
  });

  return (
    <div>
      <h4>{title}</h4>
      {displayedEntries}
    </div>
  );

};

Log.propTypes = {
  logEntries: PropTypes.array,
  title: PropTypes.string
};

export default Log;
