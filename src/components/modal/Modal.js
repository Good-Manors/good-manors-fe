import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.css';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import { postHome } from '../../services/homes';

const Modal = ({ isShowing, hide }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [name, setName] = useState('');
  const [drawer, setDrawer] = useState([]);
  const [card, setCard] = useState([]);

  const handleChange = ({ target }) => {
    setName(target.value);
  };

  const handleForm = (step) => {
    if(step === 2) {
      const selectedDrawers = Array.from(document.querySelectorAll('input:checked')).map(drawer => {
        return drawer.value;
      });
      setDrawer(selectedDrawers);
    }
    if(step > 2) {
      const selectedCards = Array.from(document.querySelectorAll('input:checked')).map(card => {
        return card.value;
      });
      setCard([...card, selectedCards]);
    }
    setCurrentStep(step + 1);
  };

  const handleFormSubmit = () => {
    const selectedCards = Array.from(document.querySelectorAll('input:checked')).map(card => {
      return card.value;
    });
    setCard([...card, selectedCards]);
    postHome(name);
  };

  const drawerSteps = drawer.map((eachDrawer, i) => {
    if(i === drawer.length - 1) {
      return <Form3 index={i} key={i} drawerName={eachDrawer} currentStep={currentStep} card={card} handleForm={handleFormSubmit} />;
    }
    return <Form3 index={i} key={i} drawerName={eachDrawer} currentStep={currentStep} card={card} handleForm={handleForm} />;
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

            <Form1 handleChange={handleChange} handleForm={handleForm} name={name} currentStep={currentStep} />
            <Form2 currentStep={currentStep} handleForm={handleForm} />
            {drawerSteps}

          </div>
        </div>
      </React.Fragment>, document.body
    ) : null
  );
};

export default Modal;
