import React from 'react';

const Drawer = ({ drawer, cards }) => {
  const mappedCards = cards.map((card, i) => {
    return <div key={i}>
      <p>{card.name}</p>
      <img src={card.type} />
    </div>;
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

export default Drawer;
