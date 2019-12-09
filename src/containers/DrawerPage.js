import React from 'react';
import Header from '../components/Header/Header';
import sampleData from '../assets/sampleData';
import styles from './DrawerPage.css';
import DrawerDetail from './DrawerDetail';

const drawers = sampleData.drawers;

const DrawerPage = () => {

  return (
    <section id='drawer-page-wrapper' className={styles.DrawerPageWrapper}>
      <Header />
      <DrawerDetail />
      
    </section>
  );

};

export default DrawerPage;
