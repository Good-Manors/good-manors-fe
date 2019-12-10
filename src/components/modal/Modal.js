import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
import styles from './Modal.css';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';
import { initializeHome } from '../../services/homes';
import { setHome } from '../../actions/homeActions';

const Modal = ({ isShowing, hide }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [name, setName] = useState('');
  const [drawer, setDrawer] = useState([]);
  const [card, setCard] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();

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
    initializeHome(name, drawer, card)
      .then(home => {
        dispatch(setHome(home));
        hide();
        setRedirect(true);
      });
  };

  const drawerSteps = drawer.map((eachDrawer, i) => {
    return <Form3 index={i} key={i} drawerName={eachDrawer} currentStep={currentStep} card={card} handleForm={handleForm} />;
  });

  if(redirect) return <Redirect to="/home" />;

  return (
    isShowing ? ReactDOM.createPortal(
      <>
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
            <Form4 currentStep={currentStep} drawer={drawer} card={card} handleFormSubmit={handleFormSubmit} />
          </div>
        </div>
      </>, document.body
    ) : null
  );
};

export default Modal;
