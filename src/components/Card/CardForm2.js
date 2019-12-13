/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const CardForm2 = ({ name, type, cardContent, currentStep, handleChange, cardId, handleForm }) => {
  
  if(currentStep !== 2) return null;
  return (
    <>
      <Card type={type} name={name} _id={cardId} content={cardContent} edit={true} />
      <button onClick={() => handleForm(currentStep)}>Finish</button>
    </>
  );
};

CardForm2.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  cardId: PropTypes.number,
  cardContent: PropTypes.array,
  currentStep: PropTypes.number,
  handleChange: PropTypes.func,
  handleForm: PropTypes.func
};

export default CardForm2;
