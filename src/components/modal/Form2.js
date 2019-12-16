/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form2.css';

const Form2 = ({ currentStep, handleForm }) => {
  if(currentStep !== 2) return null;

  return (
    <>
      <section className={styles.Form2}>
        <h3>Choose the drawers you want in your home.</h3>

        <form className={styles.flexForm}>
          <div>
            <p><input type="checkbox" name='drawer' value="Kitchen" /> Kitchen</p>
            <p><input type="checkbox" name='drawer' value="Living" /> Living</p>
            <p><input type="checkbox" name='drawer' value="Dining" /> Dining</p>
            <p><input type="checkbox" name='drawer' value="Master" /> Master Bedroom</p>
            <p><input type="checkbox" name='drawer' value="Bedroom" /> Bedroom</p>
          </div>
          <div>
            <p><input type="checkbox" name='drawer' value="Bathroom" /> Bathroom</p>
            <p><input type="checkbox" name='drawer' value="Exterior" /> Exterior</p>
            <p><input type="checkbox" name='drawer' value="Office" /> Office</p>
            <p><input type="checkbox" name='drawer' value="Laundry" /> Laundry</p>
            <p><input type="checkbox" name='drawer' value="Utilities" /> Utilities</p>
          </div>
        </form>
        <button onClick={() => handleForm(currentStep)}>Next</button>
      </section>
    </>
  );
};

Form2.propTypes = {
  currentStep: PropTypes.number,
  handleForm: PropTypes.func
};

export default Form2;
