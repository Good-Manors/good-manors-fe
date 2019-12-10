import React from 'react';
import Header from '../components/Header/Header';
import DrawerList from '../components/Drawer/DrawerList';
import sampleData from '../assets/sampleData';
import styles from './HomePage.css';

const drawers = sampleData.drawers;

const HomePage = () => {

  return (
    <section id='home-page-wrapper' className={styles.HomePageWrapper}>
      <Header />
      <section className={styles.DrawerListWrapper}>
        <DrawerList drawers={drawers} />
      </section>
      
    </section>
  );

};

export default HomePage;
