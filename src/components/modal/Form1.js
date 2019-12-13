/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form2.css';

const Form1 = ({ name, currentStep, handleChange, handleForm }) => {
  if(currentStep !== 1) return null;
  return (
    <section className={styles.Form2}>
      <h3>Add a New Home</h3>
      <h4>What would you like to name your home?</h4>
      <input type="text" value={name} onChange={handleChange} /><br />
      <button onClick={() => handleForm(currentStep) }>Next</button>
    </section>
  );
};

Form1.propTypes = {
  name: PropTypes.string,
  currentStep: PropTypes.number,
  handleChange: PropTypes.func,
  handleForm: PropTypes.func
};

export default Form1;
