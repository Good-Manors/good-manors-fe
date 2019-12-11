/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';

const CardForm1 = ({ cardName, currentStep, handleChange, handleForm }) => {
  if(currentStep !== 1) return null;
  return (
    <>
      <p>Card Name: <input type='text' value={cardName} onChange={handleChange} /></p>
      <p>What type of card would you like?</p>
      <select id='card-type'>
        <option value="Appliance"> Appliance</option>
        <option value="Material"> Material</option>
        <option value="PaintSwatch"> Paint</option>
        <option value="Utility"> Utility</option>
        <option value="Contact"> Contact</option>
        <option value="Plant"> Plant</option>
        <option value="Pet"> Pet</option>
      </select>
      <button onClick={() => handleForm(currentStep)}>Next</button>
    </>
  );
};

CardForm1.propTypes = {
  cardName: PropTypes.string,
  currentStep: PropTypes.number,
  handleChange: PropTypes.func,
  handleForm: PropTypes.func
};

export default CardForm1;
