import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.css';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';

const Modal = ({ isShowing, hide }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [name, setName] = useState('');
  const [drawer, setDrawer] = useState([]);
  const [card, setCard] = useState([]);

  const handleChange = ({ target }) => {
    setName(target.value);
  };

  const handleForm1 = () => {
    setCurrentStep(2);
  };

  const handleForm2 = () => {
    const values = document.querySelectorAll('input:checked');
    const arrayValues = Array.from(values);
    const mappedArray = arrayValues.map(item => {
      return item.value;
    });
    setDrawer(mappedArray);
    setCurrentStep(3);
  };

  const handleForm3 = () => {
    setCurrentStep(currentStep + 1);
  };

  const drawerSteps = drawer.map((eachDrawer, i) => {
    return <Form3 index={i} key={i} drawer={eachDrawer} currentStep={currentStep} card={card} handleForm3={handleForm3} />;
  });

  return (
    isShowing ? ReactDOM.createPortal(
      <React.Fragment>
        <div className={styles.modalOverlay} />
        <div className={styles.modalWrapper} aria-modal aria-hidden tabIndex={-1} role="dialog">
          <div className={styles.modal}>

            <div className={styles.modalHeader}>
              <button type="button" className={styles.modalCloseButton} data-dismiss="modal" aria-label="Close" onClick={hide}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <Form1 handleChange={handleChange} handleForm1={handleForm1} name={name} currentStep={currentStep} />
            <Form2 currentStep={currentStep} drawer={drawer} handleForm2={handleForm2} />
            {drawerSteps}

          </div>
        </div>
      </React.Fragment>, document.body
    ) : null
  );
};

export default Modal;
