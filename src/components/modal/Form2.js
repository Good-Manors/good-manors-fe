/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form2.css';

const Form2 = ({ currentStep, handleForm }) => {
  if(currentStep !== 2) return null;

  return (
    <>
      <section className={styles.Form2}>
        <h3>Select all that apply to your project</h3>

        <form>
          <input type="checkbox" name='drawer' value="Kitchen" /> Kitchen
          <input type="checkbox" name='drawer' value="Living" /> Living
          <input type="checkbox" name='drawer' value="Dining" /> Dining
          <input type="checkbox" name='drawer' value="Master" /> Master
          <input type="checkbox" name='drawer' value="Bedroom" /> Bedroom
          <input type="checkbox" name='drawer' value="Bathroom" /> Bathroom
          <input type="checkbox" name='drawer' value="Exterior" /> Exterior
          <input type="checkbox" name='drawer' value="Office" /> Office
          <input type="checkbox" name='drawer' value="Utilities" /> Utilities

          <button onClick={() => handleForm(currentStep)}>Next</button>
        </form>
      </section>
    </>
  );
};

Form2.propTypes = {
  currentStep: PropTypes.number,
  handleForm: PropTypes.func
};

export default Form2;
