import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Modal from '../components/modal/Modal';
import Header from '../components/Header/Header';
import Menu from '../components/Menu';
import useModal from '../hooks/useModal';
import styles from './UserDash.css';
import { getAllHomes, getHome, deleteHome, setDefaultHomeId } from '../services/homes';
import { setHome } from '../actions/homeActions';
import icon from '../assets/icons/custom-drawer-icon.png';
import Loader from '../components/Loader/Loader';
import { defaultHomeAction } from '../actions/sessionActions';

const UserDash = () => {
  const { isShowing, toggle } = useModal();
  const [userHomes, setUserHomes] = useState();
  const [redirect, setRedirect] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    getAllHomes()
      .then(homes => {
        if(!homes) {
          setUserHomes('none');
        }
        setUserHomes(homes);
      });
  }, []);

  const handleHomeClick = (id) => {
    getHome(id)
      .then(home => {
        dispatch(setHome(home));
        setRedirect(true);
      });
  };

  const handleDeleteHome = (id) => {
    deleteHome(id)
      .then(() => {
        getAllHomes()
          .then(homes => {
            setUserHomes(homes);
          });
      });
  };

  const handleDefaultHome = (id) => {
    setDefaultHomeId(id)
      .then(res=> {
        defaultHomeAction(res.user.defaultHome);
      });
  };

  if(redirect) return <Redirect to='/home' />;

  if(!userHomes) return <Loader />;

  const mappedHomes = userHomes.map(home => {
    return <div className={styles.homeDisplay} key={home._id} >
      <img src={icon} />
      <p onClick={() => handleHomeClick(home._id)}>{home.title}</p>
      <span onClick={() => handleDeleteHome(home._id)}>X</span>
      <span onClick={() => handleDefaultHome(home._id)}>Set Default</span>
    </div>;
  });

  if(userHomes === 'none') toggle();

  return (
    <section className={styles.UserDash}>
      <Header />
      <Menu />
      <section className={styles.UserDashWrapper}>
        <h2>Dashboard</h2>
        <button onClick={toggle}>+ New Home</button>
        <section className={styles.homeSection}>
          {mappedHomes}
        </section>
        <Modal
          isShowing={isShowing}
          hide={toggle}
        />
      </section>
    </section>
  );
};

export default UserDash;
