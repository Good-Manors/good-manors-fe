import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header/Header';
import Menu from '../components/Menu';
import Search from '../components/Search';
import DrawerList from '../components/Drawer/DrawerList';
import sampleData from '../assets/sampleData';
import styles from './HomePage.css';
import { getDrawers } from '../selectors/homeSelectors';
import { getFirstHome } from '../services/homes';
import { setHome } from '../actions/homeActions';


const HomePage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    getFirstHome()
      .then(home => {
        dispatch(setHome(home));
      });
  }, []);

  const drawers = useSelector(getDrawers);

  return (
    <section id='home-page-wrapper' className={styles.HomePageWrapper}>
      <Header />
      <Menu />
      <Search/>
      <section className={styles.DrawerListWrapper}>
        <DrawerList drawers={drawers} />
      </section>
      
    </section>
  );

};

export default HomePage;
