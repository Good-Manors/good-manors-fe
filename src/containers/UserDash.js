import React from 'react';
import Modal from '../components/modal/Modal';
import Header from '../components/Header/Header';
import Menu from '../components/Menu';
import useModal from '../hooks/useModal';
import styles from './UserDash.css';

const UserDash = () => {
  const { isShowing, toggle } = useModal();

  
  return (
    <section className={styles.UserDash}>
      <Header />
      <Menu />
      <section>

        <button className={styles.buttonDefault} onClick={toggle}>Add New Home</button>
        <Modal
          isShowing={isShowing}
          hide={toggle}
        />
      </section>
    </section>
  );
};

export default UserDash;
