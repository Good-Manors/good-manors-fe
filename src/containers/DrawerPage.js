import React from 'react';
import Header from '../components/Header/Header';
import sampleData from '../assets/sampleData';
import styles from './HomePage.css';
import DrawerDetail from './DrawerDetail';

const drawers = sampleData.drawers;

const DrawerPage = () => {

  return (
    <section id='home-page-wrapper' className={styles.HomePageWrapper}>
      <Header />
      <DrawerDetail drawers={drawers} />
      
    </section>
  );

};

export default DrawerPage;
