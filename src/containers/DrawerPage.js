import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import Menu from '../components/Menu';
import styles from './DrawerPage.css';
import CardList from '../components/Card/CardList';
import { getFirstHome } from '../services/homes';
import { setHome } from '../actions/homeActions';

const DrawerPage = () => {

  const dispatch = useDispatch();

  const { drawerId } = useParams();
  console.log('params from drawerpage', drawerId);

  useEffect(() => {
    getFirstHome()
      .then(home => {
        dispatch(setHome(home));
      });
  }, []);

  return (
    <section id='drawer-page-wrapper' className={styles.DrawerPageWrapper}>
      <Header />
      <Menu />
      <section className={styles.CardListWrapper}>
        <CardList drawer={drawerId || ''} />
      </section>
    </section>
  );
};

export default DrawerPage;
