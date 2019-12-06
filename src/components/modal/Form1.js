/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';

const Form1 = ({ name, currentStep, handleChange, handleForm }) => {
  if(currentStep !== 1) return null;
  console.log(currentStep);

  return (
    <>
      <h2>Welcome to HubKeep! Let's get started.</h2>
      <h3>What would you like to call your home?</h3>
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={() => handleForm(currentStep) }>Next</button>
    </>
  );
};

Form1.propTypes = {
  name: PropTypes.string,
  currentStep: PropTypes.number,
  handleChange: PropTypes.func,
  handleForm: PropTypes.func
};

export default Form1;
