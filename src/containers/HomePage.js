import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header/Header';
import Menu from '../components/Menu';
import DrawerList from '../components/Drawer/DrawerList';
import styles from './HomePage.css';
import { getDrawers, getHomeInfo } from '../selectors/homeSelectors';
import { getFirstHome } from '../services/homes';
import { setHome } from '../actions/homeActions';
import Search from '../components/Search';
import HomeTitle from '../components/HomeTitle';

const HomePage = () => {

  const dispatch = useDispatch();
  const home = useSelector(getHomeInfo);
  let title;
  if(home) title = home.title;

  const drawers = useSelector(getDrawers);

  useEffect(() => {
    getFirstHome()
      .then(home => {
        dispatch(setHome(home));
      });
  }, []);

  return (
    <section id='home-page-wrapper' className={styles.HomePageWrapper}>
      <Header />
      <Menu />
      <Search home={home} />
      <section className={styles.DrawerListWrapper}>
        <DrawerList drawers={drawers || []} home={home || {}} />
      </section>

    </section>
  );

};

export default HomePage;
