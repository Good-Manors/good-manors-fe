import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ReactDOM from 'react-dom';
import styles from '../modal/Modal.css';
import { postDrawer } from '../../services/homes';
import { setHome } from '../../actions/homeActions';

const NewDrawerModal = ({ isShowing, hide, home }) => {
  const [other, setOther] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = ({ target }) => {
    setOther(target.value);
  };

  const handleForm = () => {
    let selectedDrawer = document.querySelector('input[name="drawer"]:checked').value;
    if(selectedDrawer === 'Other') selectedDrawer = other;
    postDrawer(selectedDrawer, home._id)
      .then(home => {
        dispatch(setHome(home));
        history.push(`/cards/${home.home._id}/${home.drawers[home.drawers.length - 1]._id}`);
        hide();
      });
  };

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

            <div className={styles.form}>
              <h3>Add a Drawer</h3>
              <h4>What type of drawer would you like?</h4>
              <div className={styles.radio}>
                <div className={styles.column}>
                  <p><input type="radio" name='drawer' value="Kitchen" /> Kitchen</p>
                  <p><input type="radio" name='drawer' value="Living" /> Living</p>
                  <p><input type="radio" name='drawer' value="Dining" /> Dining</p>
                  <p><input type="radio" name='drawer' value="Master" /> Master</p>
                  <p><input type="radio" name='drawer' value="Other" /> Other <input type='text' value={other} onChange={handleChange} /></p>
                </div>
                <div className={styles.column}>
                  <p><input type="radio" name='drawer' value="Bedroom" /> Bedroom</p>
                  <p><input type="radio" name='drawer' value="Bathroom" /> Bathroom</p>
                  <p><input type="radio" name='drawer' value="Exterior" /> Exterior</p>
                  <p><input type="radio" name='drawer' value="Utilities" /> Utilities</p>
                </div>
              </div>
              <button onClick={handleForm}>Save</button>
            </div>
          </div>
        </div>
      </>, document.body
    ) : null
  );
};

export default NewDrawerModal;
