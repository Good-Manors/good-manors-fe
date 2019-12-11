import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Drawer.css';
import icon from '../../assets/temp-icon-black.png';
import cardIcon from '../../assets/temp-icon.png';
import { getCards } from '../../selectors/homeSelectors';


const Drawer = ({ name, index, id }) => {
  const [open, setOpen] = useState(false);
  const cards = useSelector(state => getCards(state, index));

  const mappedCards = cards.map((card, i) => {
    return <Link key={i} to={`/cards/${id}#${card._id}`}>
      <div>
        <img src={cardIcon} />
        <p>{card.name}</p>
        {/* <img src={card.type} /> */}
      </div></Link>;
  });

  return (
    <section className={styles.Drawer}>
      <div className={styles.Name} onClick={() => {
        open ? setOpen(false) : setOpen(true);
      }}>
        <img src={icon} />
        <h3>{name}</h3>
        <button
          className={`${styles.dropButton} ${open ? styles.up : styles.down} `}
        >^</button>
      </div>

      <div className={`${styles.Tray} ${open ? styles.open : styles.closed} `}>
        {mappedCards}
      </div>
    </section>
  );
};

Drawer.propTypes = {
  name: PropTypes.string,
  cards: PropTypes.array,
  index: PropTypes.number,
  id: PropTypes.string
};

export default Drawer;
