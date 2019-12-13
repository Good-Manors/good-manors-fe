import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ReactDOM from 'react-dom';
import styles from '../modal/Modal.css';
import { postDrawer } from '../../services/homes';
import { setHome } from '../../actions/homeActions';

const NewDrawerModal = ({ isShowing, hide, home }) => {
  const [other, setOther] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    setOther(target.value);
  };

  const handleForm = () => {
    let selectedDrawer = document.querySelector('input[name="drawer"]:checked').value;
    if(selectedDrawer === 'Other') selectedDrawer = other;
    postDrawer(selectedDrawer, home._id)
      .then(home => {
        dispatch(setHome(home));
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
                  <p className={styles.drawerP}><input type="radio" name='drawer' value="Kitchen" /> Kitchen</p>
                  <p className={styles.drawerP}><input type="radio" name='drawer' value="Living" /> Living</p>
                  <p className={styles.drawerP}><input type="radio" name='drawer' value="Dining" /> Dining</p>
                  <p className={styles.drawerP}><input type="radio" name='drawer' value="Master" /> Master</p>
                  <p className={styles.drawerP}><input type="radio" name='drawer' value="Bedroom" /> Bedroom</p>
                  <p className={styles.drawerP}><input type="radio" name='drawer' value="Other" /> Other <input className={styles.textBox} type='text' value={other} onChange={handleChange} /></p>
                </div>
                <div className={styles.column}>
                  
                  <p className={styles.drawerP}><input type="radio" name='drawer' value="Bathroom" /> Bathroom</p>
                  <p className={styles.drawerP}><input type="radio" name='drawer' value="Office" /> Office</p>
                  <p className={styles.drawerP}><input type="radio" name='drawer' value="Laundry" /> Laundry</p>
                  <p className={styles.drawerP}><input type="radio" name='drawer' value="Exterior" /> Exterior</p>
                  <p className={styles.drawerP}><input type="radio" name='drawer' value="Utilities" /> Utilities</p>
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
