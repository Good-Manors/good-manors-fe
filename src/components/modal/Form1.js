/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const Form1 = ({ name, currentStep, handleChange, handleForm1 }) => {
  if(currentStep !== 1) return null;

  return (
    <>
      <h2>Welcome to HubKeep, let's get started!</h2>
      <h3>Name your project:</h3>
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={handleForm1}>Next</button>
    </>
  );
};

export default Form1;
