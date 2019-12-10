import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Drawer.css';
import icon from '../../assets/temp-icon-black.png';
import cardIcon from '../../assets/temp-icon.png';


const Drawer = ({ name, cards }) => {
  const [open, setOpen] = useState(false);

  const mappedCards = cards.map((card, i) => {
    return <div key={i}>
      <p><img src={cardIcon} /> {card.name}</p>
      {/* <img src={card.type} /> */}
    </div>;
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
  cards: PropTypes.array
};

export default Drawer;
