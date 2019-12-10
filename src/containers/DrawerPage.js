import React from 'react';
import Header from '../components/Header/Header';
import styles from './DrawerPage.css';
import CardList from '../components/Card/CardList';

const DrawerPage = () => {

  return (
    <section id='drawer-page-wrapper' className={styles.DrawerPageWrapper}>
      <Header />
      <CardList />
      
    </section>
  );

};

export default DrawerPage;
