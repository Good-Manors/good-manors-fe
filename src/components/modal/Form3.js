/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const Form3 = ({ currentStep, index, drawer, card, skipModal, handleForm3 }) => {
  if(currentStep !== 3 + index) return null;
  console.log(index);
  return (
    <>
      <h3>Choose the cards that you find most useful for your {drawer}</h3>

      <input type="checkbox" name={card} value="Appliance" /> Appliance
      <input type="checkbox" name={card} value="Structure" /> Structure
      <input type="checkbox" name={card} value="Material" /> Material
      <input type="checkbox" name={card} value="Paint" /> Paint
      <input type="checkbox" name={card} value="Utility" /> Utility
      <input type="checkbox" name={card} value="Contact" /> Contact
      <input type="checkbox" name={card} value="Plant" /> Plant
      <input type="checkbox" name={card} value="Pet" /> Pet
      
      <button onClick={skipModal}>Skip</button>
      <button onClick={handleForm3}>Next</button>
    </>
  );
};

export default Form3;
