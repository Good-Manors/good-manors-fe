import React from 'react';
import Header from '../components/Header/Header';
import DrawerList from '../components/DrawerList';
import sampleData from '../assets/sampleData';
import styles from './HomePage.css';

const drawers = sampleData.drawers;

const HomePage = () => {

  return (
    <section id='home-page-wrapper' className={styles.HomePageWrapper}>
      <Header />
      <DrawerList drawers={drawers} />
      
    </section>
  );

};

export default HomePage;
