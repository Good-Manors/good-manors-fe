import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header/Header';
import Menu from '../components/Menu';
import DrawerList from '../components/Drawer/DrawerList';
import styles from './HomePage.css';
import { getDrawers, getHomeInfo } from '../selectors/homeSelectors';
import { getDefaultHomeId, getHome } from '../services/homes';
import { setHome } from '../actions/homeActions';
import Search from '../components/Search';
import loading from '../assets/loader.gif';

const HomePage = () => {
  const [drawersOpen, setDrawersOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const home = useSelector(getHomeInfo);
  let title;
  if(home) title = home.title;

  const drawers = useSelector(getDrawers);

  useEffect(() => {
    if(!home)
      getDefaultHomeId()
        .then(res => {
          return getHome(res.home);
        })
        .then(home => {
          dispatch(setHome(home));
        });
  }, []);

  useEffect(() => {
    setSearchTerm(searchTerm);
  }, [searchTerm]);

  if(!home) return <img src={loading} />;

  return (
    <section id='home-page-wrapper' className={styles.HomePageWrapper}>
      <Header />
      <Menu handleSubmit={() => { }} />
      <Search home={home} setDrawersOpen={setDrawersOpen} setSearchTerm={setSearchTerm} />
      <section className={styles.DrawerListWrapper}>
        <DrawerList drawers={drawers || []} home={home || {}} isOpen={drawersOpen} searchTerm={searchTerm} />
      </section>

    </section>
  );

};

export default HomePage;
