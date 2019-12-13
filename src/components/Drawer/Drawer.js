import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Drawer.css';
// import icon from '../../assets/temp-icon-black.png';
import cardIcon from '../../assets/temp-icon.png';
import { getCards } from '../../selectors/homeSelectors';
import { deleteDrawer } from '../../services/homes';

import kitchen from '../../assets/icons/kitchen-icon.png';
import bathroom from '../../assets/icons/bathroom-icon.png';
import living from '../../assets/icons/living-icon.png';
import bedroom from '../../assets/icons/bedroom-icon.png';
import master from '../../assets/icons/master-icon.png';
import dining from '../../assets/icons/dining-icon.png';
import exterior from '../../assets/icons/exterior-icon.png';
import utilities from '../../assets/icons/utilities-icon.png';
import custom from '../../assets/icons/custom-icon.png';
import applianceIcon from '../../assets/icons/appliance-icon.png';
import materialIcon from '../../assets/icons/material-icon.png';
import paintIcon from '../../assets/icons/paint-icon.png';
import utilityIcon from '../../assets/icons/utility-icon.png';
import contactIcon from '../../assets/icons/contact-icon.png';
import plantIcon from '../../assets/icons/plant-icon.png';
import petIcon from '../../assets/icons/pet-icon.png';
import office from '../../assets/icons/office-icon.png';
import laundry from '../../assets/icons/laundry-icon.png';
import { setHome } from '../../actions/homeActions';


const Drawer = ({ name, index, home, id, isOpen, searchTerm }) => {
  const [open, setOpen] = useState(isOpen);
  const [term, setTerm] = useState(searchTerm);
  const cards = useSelector(state => getCards(state, index));
  const dispatch = useDispatch();


  useEffect(() => {
    setOpen(isOpen);
    setTerm(searchTerm);
  }, [isOpen, searchTerm]);

  let icon;
  switch(name) {
    case 'Kitchen':
      icon = kitchen;
      break;
    case 'Bathroom':
      icon = bathroom;
      break;
    case 'Living':
      icon = living;
      break;
    case 'Dining':
      icon = dining;
      break;
    case 'Master':
      icon = master;
      break;
    case 'Bedroom':
      icon = bedroom;
      break;
    case 'Exterior':
      icon = exterior;
      break;
    case 'Utilities':
      icon = utilities;
      break;
    case 'Office':
      icon = office;
      break;
    case 'Laundry':
      icon = laundry;
      break;
    default:
      icon = custom;
      break;
  }

  const cardIcons = {
    Appliance: applianceIcon,
    Material: materialIcon,
    PaintSwatch: paintIcon,
    Utility: utilityIcon,
    Contact: contactIcon,
    Plant: plantIcon,
    Pet: petIcon
  };

  const handleDeleteDrawer = (drawer) => {
    deleteDrawer(drawer)
      .then(home => {
        dispatch(setHome(home));
      });
  };

  const mappedCards = cards.map((card, i) => {
    const type = card.type;
    console.log(type, type === term, term);
    return <Link key={i} to={`/cards/${home._id}/${id}#${card._id}`}>
      <div className={`${styles[type]} ${type.toLowerCase().includes(term.toLowerCase()) && term !== '' ? styles.Highlight : null}`}>
        <img src={cardIcons[card.type]} />
        <p>{card.name}</p>
      </div></Link>;
  });

  return (
    <section className={styles.Drawer}>
      <div className={styles.Name}>
        <img src={icon} />
        <Link to={`/cards/${home._id}/${id}`}><h3>{name}</h3></Link>
        <button className={styles.goButton} onClick={() => {
          open ? setOpen(false) : setOpen(true);
        }}>></button>
        <div className={styles.spaceDiv}></div>
        <button
          className={`${styles.dropButton}`}
          onClick={() => handleDeleteDrawer(id)}
        >x</button>
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
