import React from 'react';
import Header from '../components/Header/Header';
import Menu from '../components/Menu';
import styles from './DrawerPage.css';
import CardList from '../components/Card/CardList';

const DrawerPage = () => {

  return (
    <section id='drawer-page-wrapper' className={styles.DrawerPageWrapper}>
      <Header />
      <Menu />
      <section className={styles.CardListWrapper}>
        <CardList />
      </section>
    </section>
  );

};

export default DrawerPage;
