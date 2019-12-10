import React from 'react';
import Drawer from './Drawer';
import PropTypes from 'prop-types';
import styles from './DrawerList.css';

const DrawerList = ({ drawers }) => {

  const addDrawer = () => {
    console.log('add drawer');
  };

  const mappedDrawers = drawers.map((drawer, i) => {
    return <Drawer key={i} name={drawer.name} cards={drawer.cards} />;
  });

  return (
    <section id='drawer-list' className={styles.DrawerList}>
      {mappedDrawers}
      <button onClick={addDrawer}>+ New Drawer</button>
    </section>
  );
};

DrawerList.propTypes = {
  drawers: PropTypes.array
};

export default DrawerList;

