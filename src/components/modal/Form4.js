/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';

const Form4 = ({ currentStep, drawer, handleFormSubmit }) => {
  console.log('currentStep: ', currentStep, 'drawer.length: ', drawer.length);

  if(currentStep !== 3 + drawer.length) return null;

  return (
    <>
      <h2>Thanks! We've set up a home for you based on your answers.</h2>
      <button onClick={() => handleFormSubmit(currentStep)}>Next</button>
    </>
  );
};

Form4.propTypes = {
  currentStep: PropTypes.number,
  drawer: PropTypes.array,
  handleFormSubmit: PropTypes.func
};

export default Form4;
