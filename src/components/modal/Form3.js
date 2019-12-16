/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form2.css';

const Form3 = ({ currentStep, index, drawerName, card, handleForm }) => {
  if(currentStep !== 3 + index) return null;
  return (
    <>
      <section className={styles.Form2}>
        <h3>Select cards for your {drawerName}</h3>

        <form>
          <div>
            <p><input type="checkbox" name={card} value="Appliance" /> Appliance</p>
            <p><input type="checkbox" name={card} value="Material" /> Material</p>
            <p><input type="checkbox" name={card} value="PaintSwatch" /> Paint</p>
            <p><input type="checkbox" name={card} value="Utility" /> Utility</p>
          </div>
          <div>
            <p><input type="checkbox" name={card} value="Contact" /> Contact</p>
            <p><input type="checkbox" name={card} value="Plant" /> Plant</p>
            <p><input type="checkbox" name={card} value="Pet" /> Pet</p>
          </div>
        </form>
        <button onClick={() => handleForm(currentStep)}>Next</button>
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
