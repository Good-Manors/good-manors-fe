import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Drawer.css';
// import icon from '../../assets/temp-icon-black.png';
import cardIcon from '../../assets/temp-icon.png';
import { getCards } from '../../selectors/homeSelectors';
import kitchen from '../../assets/icons/kitchen-icon.png';
import bathroom from '../../assets/icons/bathroom-icon.png';
import living from '../../assets/icons/living-icon.png';
import bedroom from '../../assets/icons/bedroom-icon.png';
import master from '../../assets/icons/master-icon.png';
import dining from '../../assets/icons/dining-icon.png';
import exterior from '../../assets/icons/exterior-icon.png';
import utilities from '../../assets/icons/utilities-icon.png';
import custom from '../../assets/icons/custom-drawer-icon.png';
import applianceIcon from '../../assets/icons/appliance-icon.png';
import materialIcon from '../../assets/icons/material-icon.png';
import paintIcon from '../../assets/icons/paint-icon.png';
import utilityIcon from '../../assets/icons/utility-icon.png';
import contactIcon from '../../assets/icons/contact-icon.png';
import plantIcon from '../../assets/icons/plant-icon.png';
import petIcon from '../../assets/icons/pet-icon.png';
import customIcon from '../../assets/icons/custom-card-icon.png';


const Drawer = ({ name, index, home, id, isOpen, searchTerm }) => {
  const [open, setOpen] = useState(isOpen);
  const [term, setTerm] = useState(searchTerm);
  const cards = useSelector(state => getCards(state, index));

  useEffect(() => {
    setOpen(isOpen);
    setTerm(searchTerm);
  }, [isOpen, searchTerm]);

  let icon;
  if(name === 'Kitchen') icon = kitchen;
  if(name === 'Bathroom') icon = bathroom;
  if(name === 'Living') icon = living;
  if(name === 'Dining') icon = dining;
  if(name === 'Master') icon = master;
  if(name === 'Bedroom') icon = bedroom;
  if(name === 'Exterior') icon = exterior;
  if(name === 'Utilities') icon = utilities;

  const cardIcons = {
    Appliance: applianceIcon,
    Material: materialIcon,
    PaintSwatch: paintIcon,
    Utility: utilityIcon,
    Contact: contactIcon,
    Plant: plantIcon,
    Pet: petIcon
  };

  // type == term ? styles.Highlight : null

  const mappedCards = cards.map((card, i) => {
    const type = card.type;
    console.log(type, type === term, term);
    return <Link key={i} to={`/cards/${home._id}/${id}#${card._id}`}>
      <div className={`${styles[type]} ${type.toLowerCase().includes(term.toLowerCase()) ? styles.Highlight : null}`}>
        <img src={cardIcons[card.type]} />
        <p>{card.name}</p>
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
  home: PropTypes.object,
  name: PropTypes.string,
  cards: PropTypes.array,
  index: PropTypes.number,
  id: PropTypes.string
};

export default Drawer;
