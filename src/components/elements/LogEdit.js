import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Card/Card.css';

const LogEdit = ({ logEntries, title, index, handleAddLogEntry, handleRemoveLogEntry, handleLogEntryChange }) => {

  const entries = logEntries.map((entry, i) => {
    return (
      <div key={i}>
        <input 
          data-index={index} 
          data-entry-index={i}
          value={entry} 
          onChange={handleLogEntryChange} 
          className={styles.logInput}
        />
        <button data-index={index} className={styles.logButton} data-entry-index={i} onClick={handleRemoveLogEntry}>X</button>
        <hr />
      </div>
    );
  });

  return (
    <div>
      <h4>{title}</h4>
      {entries}
      <button data-index={index} onClick={handleAddLogEntry}>+ Log</button>
    </div>
  );

};

LogEdit.propTypes = {
  title: PropTypes.string,
  logEntries: PropTypes.array,
  index: PropTypes.number,
  handleAddLogEntry: PropTypes.func,
  handleRemoveLogEntry: PropTypes.func,
  handleLogEntryChange: PropTypes.func
};

export default LogEdit;
