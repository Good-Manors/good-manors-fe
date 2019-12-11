/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const CardForm2 = ({ name, type, cardContent, currentStep, handleChange, handleForm }) => {
  if(currentStep !== 2) return null;

  return (
    <>
      <Card type={type} name={name} content={cardContent} edit={true}/>
      <button onClick={() => handleForm(currentStep) }>Next</button>
    </>
  );
};

CardForm2.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  cardContent: PropTypes.array,
  currentStep: PropTypes.number,
  handleChange: PropTypes.func,
  handleForm: PropTypes.func
};

export default CardForm2;
