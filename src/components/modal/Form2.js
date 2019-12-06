/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const Form2 = ({ currentStep, drawer, handleForm2 }) => {
  if (currentStep !== 2) return null;

  return (
    <>
      <h3>Select the categories that you find most useful</h3>

      <form>
        <input type="checkbox" name={drawer} value="Kitchen" /> Kitchen
        <input type="checkbox" name={drawer} value="Living" /> Living
        <input type="checkbox" name={drawer} value="Dining" /> Dining
        <input type="checkbox" name={drawer} value="Master Bedroom" /> Master Bedroom
        <input type="checkbox" name={drawer} value="Bedroom" /> Bedroom
        <input type="checkbox" name={drawer} value="Bathroom" /> Bathroom
        <input type="checkbox" name={drawer} value="Exterior" /> Exterior
        <input type="checkbox" name={drawer} value="Utilities" /> Utilities
  
        <button onClick={handleForm2}>Next</button>
      </form>
    </>
  );
};

export default Form2;
