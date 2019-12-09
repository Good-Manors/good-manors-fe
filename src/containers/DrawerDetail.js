import React from 'react';
import Card from '../components/Card';
import house from '../assets/sampleData';
import styles from './DrawerDetail.css';

const DrawerDetail = () => {

  const cards = house.drawers[0].cards;

  const mappedCards = cards.map((card, i) => {
    return <Card key={i} {...card} />;
  });

  const addNewCard = () => {
    console.log('add new card');
  };


  return (
    <section className={styles.DrawerDetail}>
      <h2>{house.drawers[0].name}</h2>
      <button onClick={addNewCard}>+ New Card</button>
      <section>
        {mappedCards}
      </section>
    </section>
  );
};

export default DrawerDetail;
