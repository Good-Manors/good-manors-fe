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
import Loader from '../components/Loader/Loader';
import bathroom from '../assets/img-vertical/bathroom-vert.jpg';
import cat from '../assets/img-vertical/cat-yard-vert.jpg';
import dining from '../assets/img-vertical/dining-vert.jpg';
import garden from '../assets/img-vertical/garden-vert.jpg';
import kid from '../assets/img-vertical/kid-room-vert.jpg';
import kitchen from '../assets/img-vertical/kitchen-vert.jpg';
import nook from '../assets/img-vertical/nook-vert.jpg';

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
    if(searchTerm === '') setDrawersOpen(false);
  }, [searchTerm]);

  if(!home) return <Loader />;

  return (
    <section id='home-page-wrapper' className={styles.HomePageWrapper}>
      <Header />
      <Menu handleSubmit={() => { }} />
      <Search home={home} setDrawersOpen={setDrawersOpen} setSearchTerm={setSearchTerm} />
      <section className={styles.DrawerListWrapper}>
        <DrawerList drawers={drawers || []} home={home || {}} isOpen={drawersOpen} searchTerm={searchTerm} />
      </section>
      <img src={bathroom} className={styles.Invisible} />
      <img src={cat} className={styles.Invisible} />
      <img src={dining} className={styles.Invisible} />
      <img src={garden} className={styles.Invisible} />
      <img src={kid} className={styles.Invisible} />
      <img src={kitchen} className={styles.Invisible} />
      <img src={nook} className={styles.Invisible} />

    </section>
  );

};

export default HomePage;
