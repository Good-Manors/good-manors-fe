import React from 'react';
import Drawer from './Drawer';
import PropTypes from 'prop-types';
import styles from './DrawerList.css';


const DrawerList = ({ drawers }) => {

  const addDrawer = () => {
    console.log('add drawer');
  };

  const mappedDrawers = drawers.map((drawer, i) => {
    console.log(drawer);
    return <Drawer key={i} name={drawer.name} id={drawer._id} index={i} />;
  });

  return (
    <section id='drawer-list' className={styles.DrawerList}>
      <button onClick={addDrawer}>+ New Drawer</button>
      {mappedDrawers}
    </section>
  );
};

DrawerList.propTypes = {
  drawers: PropTypes.array
};

export default DrawerList;

