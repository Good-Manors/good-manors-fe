import React from 'react';
import { useSelector} from 'react-redux';
import Drawer from './Drawer';
import PropTypes from 'prop-types';
import styles from './DrawerList.css';
import { getDrawers } from '../../selectors/homeSelectors';


const DrawerList = ({ drawers }) => {

  console.log(drawers);

  const addDrawer = () => {
    console.log('add drawer');
  };

  const mappedDrawers = drawers.map((drawer, i) => {
    return <Drawer key={i} name={drawer.name} index={i} />;
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

