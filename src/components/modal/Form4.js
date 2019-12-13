/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';

const Form4 = ({ currentStep, drawer, handleFormSubmit }) => {

  if(currentStep !== 3 + drawer.length) return null;

  return (
    <section>
      <h3>Your home is now ready to go!</h3>
      <button onClick={() => handleFormSubmit(currentStep)}>Finish</button>
    </section>
  );
};

Form4.propTypes = {
  currentStep: PropTypes.number,
  drawer: PropTypes.array,
  handleFormSubmit: PropTypes.func
};

export default Form4;
