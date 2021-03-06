import React from 'react';
import { useSelector } from 'react-redux';
import Drawer from './Drawer';
import PropTypes from 'prop-types';
import useModal from '../../hooks/useModal';
import NewDrawerModal from './NewDrawerModal';
import styles from './DrawerList.css';
import { getHomeInfo } from '../../selectors/homeSelectors';


const DrawerList = ({ drawers, isOpen, searchTerm }) => {

  const { isShowing, toggle } = useModal();
  const home = useSelector(getHomeInfo);

  const mappedDrawers = drawers.map((drawer, i) => {
    return <Drawer 
      key={i} 
      name={drawer.name} 
      home={home} 
      id={drawer._id} 
      index={i} 
      isOpen={isOpen}
      searchTerm={searchTerm} 
    />;
  });

  return (
    <section id='drawer-list' className={styles.DrawerList}>
      <button onClick={toggle}>+ New Drawer</button>
      <NewDrawerModal home={home} isShowing={isShowing} hide={toggle} />
      {mappedDrawers}
    </section>
  );
};

DrawerList.propTypes = {
  drawers: PropTypes.array
};

export default DrawerList;

