import React from 'react';
import Card from './Card';
import house from '../../assets/sampleData';
import styles from './CardList.css';

const CardList = () => {

  const cards = house.drawers[0].cards;

  const mappedCards = cards.map((card, i) => {
    return <Card key={i} {...card} />;
  });

  const addNewCard = () => {
    console.log('add new card');
  };


  return (
    <section className={styles.CardList}>
      <h2>{house.drawers[0].name}</h2>
      <button className={styles.CardButton} onClick={addNewCard}>+ New Card</button>
      <section>
        {mappedCards}
      </section>
    </section>
  );
};

export default CardList;
