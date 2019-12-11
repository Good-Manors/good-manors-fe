import React, { useState } from 'react';
import PropTypes from 'prop-types';

const LogEdit = ({ logEntries, title }) => {

  const [newLog, setNewLog] = useState('');

  const deleteItem = (i) => {
    
  };

  const addLog = () => {
    console.log('log added');
  };

  const displayedEntries = logEntries.map((entry, i) => {
    return (
      <div key={i}>
        <p>{entry}</p><button onClick={() => deleteItem(i)}>X</button>
        <hr />
      </div>
    );
  });

  return (
    <div>
      <h4>{title}</h4>
      {displayedEntries}
      <input type='text' value={newLog} onChange={() => setNewLog(event.target.value)} /><button onClick={addLog}>Add New</button>
    </div>
  );

};

LogEdit.propTypes = {
  logEntries: PropTypes.array
};

export default LogEdit;
