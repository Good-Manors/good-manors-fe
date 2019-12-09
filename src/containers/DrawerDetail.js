import React from 'react';
import Card from '../components/Card';
import house from '../assets/sampleData';

const DrawerDetail = () => {

  const cards = house.drawers[0].cards;

  const mappedCards = cards.map((card, i) => {
    return <Card key={i} {...card} />;
  });

  const addNewCard = () => {
    console.log('add new card');
  };


  return (
    <>
      <h2>{house.drawers[0].name}</h2>
      <button onClick={addNewCard}>+ New Card</button>
      <section>
        {mappedCards}
      </section>
    </>
  );
};

export default DrawerDetail;
