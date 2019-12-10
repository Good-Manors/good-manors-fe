/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';

const Form1 = ({ name, currentStep, handleChange, handleForm }) => {
  if(currentStep !== 1) return null;
  return (
    <>
      <h3>Welcome to good manors, an app that allows you to document and reference your home maintenance.</h3>
      <h3>Let's get started!</h3>
      <h4>What would you like to call your home?</h4>
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
