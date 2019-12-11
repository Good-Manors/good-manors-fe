/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form2.css';

const Form3 = ({ currentStep, index, drawerName, card, skipModal, handleForm }) => {
  if(currentStep !== 3 + index) return null;
  return (
    <>
      <section className={styles.Form2}>
        <h3>Select all cards that apply to your {drawerName}</h3>

        <form>
          <input type="checkbox" name={card} value="Appliance" /> Appliance
          <input type="checkbox" name={card} value="Material" /> Material
          <input type="checkbox" name={card} value="Paint" /> Paint
          <input type="checkbox" name={card} value="Utility" /> Utility
          <input type="checkbox" name={card} value="Contact" /> Contact
          <input type="checkbox" name={card} value="Plant" /> Plant
          <input type="checkbox" name={card} value="Pet" /> Pet
        </form>
        
        <div>
          <button onClick={skipModal}>Skip</button>
          <button onClick={() => handleForm(currentStep) }>Next</button>
        </div>
      </section>
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
