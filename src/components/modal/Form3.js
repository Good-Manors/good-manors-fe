/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';

const Form3 = ({ currentStep, index, drawerName, card, skipModal, handleForm }) => {
  if(currentStep !== 3 + index) return null;
  return (
    <>
      <h3>Choose the cards that you find most useful for your {drawerName}</h3>

      <input type="checkbox" name={card} value="Appliance" /> Appliance
      <input type="checkbox" name={card} value="Structure" /> Structure
      <input type="checkbox" name={card} value="Material" /> Material
      <input type="checkbox" name={card} value="Paint" /> Paint
      <input type="checkbox" name={card} value="Utility" /> Utility
      <input type="checkbox" name={card} value="Contact" /> Contact
      <input type="checkbox" name={card} value="Plant" /> Plant
      <input type="checkbox" name={card} value="Pet" /> Pet
      
      <button onClick={skipModal}>Skip</button>
      <button onClick={() => handleForm(currentStep) }>Next</button>
    </>
  );
};

Form3.propTypes = {
  currentStep: PropTypes.number,
  index: PropTypes.number,
  drawerName: PropTypes.string,
  card: PropTypes.array,
  skipModal: PropTypes.func,
  handleForm: PropTypes.func
};

export default Form3;
