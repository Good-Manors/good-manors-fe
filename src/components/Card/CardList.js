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
    <>
      <h2 className={styles.DrawerName}>{house.drawers[0].name}</h2>
      <section className={styles.CardList}>
        <button className={styles.CardButton} onClick={addNewCard}>+ New Card</button>
        <div>
          {mappedCards}
        </div>
      </section>
    </>
  );
};

export default CardList;
