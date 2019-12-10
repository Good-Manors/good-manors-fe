import React from 'react';
import Modal from '../components/modal/Modal';
import Header from '../components/Header/Header';
import useModal from '../hooks/useModal';
import styles from './UserDash.css';

const UserDash = () => {
  const { isShowing, toggle } = useModal();
  return (
    <div className={styles.UserDash}>
      <Header />
      <button className={styles.buttonDefault} onClick={toggle}>Show Modal</button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
      />
    </div>
  );
};

export default UserDash;
