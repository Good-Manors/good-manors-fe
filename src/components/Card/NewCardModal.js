import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from '../modal/Modal.css';
import CardForm1 from './CardForm1';
import CardForm2 from './CardForm2';
import { postCard } from '../../services/homes';

const NewCardModal = ({ isShowing, hide, drawer }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [cardName, setCardName] = useState('');
  const [cardType, setCardType] = useState('');
  const [cardContent, setCardContent] = useState([]);
  const [cardId, setCardId] = useState('');

  const handleModalClose = () => {
    hide();
    setCurrentStep(1);
    setCardName('');
    setCardType('');
  };

  const handleChange = ({ target }) => {
    setCardName(target.value);
  };

  const handleForm = (step) => {
    const cardType = document.getElementById('card-type').value;
    setCardType(cardType);
    postCard(cardName, cardType, drawer)
      .then(card => {
        setCardId(card._id);
        setCardContent(card.content);
        setCurrentStep(step + 1);
      });
  };

  const handleFormSubmit = () => {
    hide();
    setCurrentStep(1);
    setCardName('');
    setCardType('');
    setCardContent([]);
    setCardId('');
    
  };

  return (
    isShowing ? ReactDOM.createPortal(
      <>
        <div className={styles.modalOverlay} />
        <div className={styles.modalWrapper} aria-modal aria-hidden tabIndex={-1} role="dialog">
          <div className={styles.modal}>

            <div className={styles.modalHeader}>
              <button type="button" className={styles.modalCloseButton} data-dismiss="modal" aria-label="Close" onClick={handleModalClose}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <CardForm1 handleChange={handleChange} handleForm={handleForm} cardName={cardName} currentStep={currentStep} />
            <CardForm2 name={cardName} type={cardType} cardContent={cardContent} currentStep={currentStep} cardId={cardId} handleForm={handleFormSubmit} />
          </div>
        </div>
      </>, document.body
    ) : null
  );
};

export default NewCardModal;
