import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useModal from '../../hooks/useModal';
import Card from './Card';
import styles from './CardList.css';
import PropTypes from 'prop-types';
import { getCardsByDrawer } from '../../selectors/homeSelectors';
import { getFirstHome } from '../../services/homes';
import { setHome } from '../../actions/homeActions';
import NewCardModal from './NewCardModal';


const CardList = ({ drawer }) => {

  const { isShowing, toggle } = useModal();
  const dispatch = useDispatch();

  useEffect(() => {
    getFirstHome()
      .then(home => {
        dispatch(setHome(home));
      });
  }, []);

  const cards = useSelector(state => getCardsByDrawer(state, drawer));

  const mappedCards = cards.map((card, i) => {
    console.log(card);
    
    return <Card key={i} {...card} edit={false} />;
  });

  return (
    <section className={styles.CardList}>
      <h2>{drawer.name}</h2>
      <button className={styles.CardButton} onClick={toggle}>+ New Card</button>
      <NewCardModal isShowing={isShowing} hide={toggle} drawer={drawer} />
      <section>
        {mappedCards}
      </section>
    </section>
  );
};

CardList.propTypes = {
  drawer: PropTypes.string
};

export default CardList;
