import React from 'react';
import Drawer from './Drawer';

const Home = () => {

  

  const addDrawer = () => {
    console.log('add drawer');
  };

  const mappedDrawers = house.drawers.map((drawer, i) => {
    return <Drawer key={i} drawer={drawer.name} cards={drawer.cards} />;
  });

  return (
    <section>
      <h2>{title}</h2>
      {mappedDrawers}
      <button onClick={addDrawer}>+ New Drawer</button>
    </section>
  );
};

export default Home;
