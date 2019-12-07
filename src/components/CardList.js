import React from 'react';
import Card from './Card';
import house from '../assets/sampleData';


const CardList = () => {
  
  const cards = house.drawers[0].cards;
  const drawer = house.drawers[0].name;


  const mappedCards = cards.map((card, i) => {
    return <Card key={i} {...card} />;
  });

  return (
    <section>
      <h3>{drawer}</h3>
      <div>
        {mappedCards}
      </div>
    </section>
  );
};

export default CardList;
