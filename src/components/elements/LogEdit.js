import React, { useState } from 'react';
import PropTypes from 'prop-types';

const LogEdit = ({ logEntries }) => {

  const [newLog, setNewLog] = useState('');

  const deleteItem = (i) => {
    
  };

  const addLog = () => {

  };

  const displayedEntries = logEntries.map((entry, i) => {
    return (
      <>
        <p key={i}>{entry}</p><button onClick={() => deleteItem(i)}>X</button>
        <hr />
      </>
    );
  });

  return (
    <>
      <h3>Activity Log</h3>
      {displayedEntries}
      <input type='text' value={newLog} onChange={() => setNewLog(event.target.value)} /><button onClick={addLog}>Add New</button>
    </>
  );

};

LogEdit.propTypes = {
  logEntries: PropTypes.array
};

export default LogEdit;
