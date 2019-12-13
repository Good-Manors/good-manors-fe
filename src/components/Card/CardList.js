import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useModal from '../../hooks/useModal';
import Card from './Card';
import styles from './CardList.css';
import PropTypes from 'prop-types';
import { getCardsByDrawer } from '../../selectors/homeSelectors';
import { deleteDrawer } from '../../services/homes';
import NewCardModal from './NewCardModal';
import { setHome } from '../../actions/homeActions';


const CardList = ({ drawer }) => {

  const { isShowing, toggle } = useModal();
  const dispatch = useDispatch();

  const cards = useSelector(state => getCardsByDrawer(state, drawer));

  const handleDeleteDrawer = (drawer) => {
    deleteDrawer(drawer)
      .then(home => {
        dispatch(setHome(home));
      });
  };

  const mappedCards = cards.map((card, i) => {
    return <Card key={i} {...card} edit={false} />;
  });

  return (
    <section className={styles.CardList}>
      <h2>{drawer.name}</h2>
      <button className={styles.CardButton} onClick={toggle}>+ New Card</button>
      <button className={styles.CardButton} onClick={handleDeleteDrawer}>Delete Drawer</button>
      <NewCardModal isShowing={isShowing} hide={toggle} drawer={drawer} />
      <section className={styles.List}>
        {mappedCards}
      </section>
    </section>
  );
};

CardList.propTypes = {
  drawer: PropTypes.string
};

export default CardList;
