import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Text from '../elements/Text';
import TextEdit from '../elements/TextEdit';
import KeyValue from '../elements/KeyValue';
import Image from '../elements/Image';
import Log from '../elements/Log';
import KeyValueEdit from '../elements/KeyValueEdit';
import LogEdit from '../elements/LogEdit';
import styles from './Card.css';
import tempIcon from '../../assets/temp-icon.png';
import { updateCard } from '../../services/homes';
import applianceIcon from '../../assets/icons/appliance-icon.png';
import materialIcon from '../../assets/icons/material-icon.png';
import paintIcon from '../../assets/icons/paint-icon.png';
import utilityIcon from '../../assets/icons/utility-icon.png';
import contactIcon from '../../assets/icons/contact-icon.png';
import plantIcon from '../../assets/icons/plant-icon.png';
import petIcon from '../../assets/icons/pet-icon.png';
import customIcon from '../../assets/icons/custom-card-icon.png';


const Card = ({ name, type, content, id }) => {

  const [editMode, setEditMode] = useState(false);

  // const icons = {
  //   plant: '',
  //   paint: '',
  //   appliance: '',
  //   utility: '',
  //   structure: '',
  //   material: '',
  //   contact: '',
  //   pet: ''
  // };

  const handleChange = ({ target }) => {
    target.name = target.value;
  };

  const handleUpdateCard = () => {
    const body = {
      name: name,
      type: type,
      content: content
    };
    updateCard(id, body);
    console.log('updated card');
  };


  const mappedDisplayElements = content.map((element, i) => {
    if(element[0] === 'text') return <Text key={i} title={element[1]} text={element[2]} index={i} />;
    if(element[0] === 'key-value') return <KeyValue key={i} entryKey={element[1][0]} value={element[1][1]} index={i} />;
    if(element[0] === 'image') return <Image key={i} image={element[1]} index={i} />;
    if(element[0] === 'log') return <Log key={i} title={element[1]} logEntries={element[2]} index={i} />;
  });

  const mappedEditElements = content.map((element, i) => {
    if(element[0] === 'text') return <TextEdit key={i} title={element[1]} text={element[2]} index={i} handleChange={handleChange} />;
    if(element[0] === 'key-value') return <KeyValueEdit key={i} entryKey={element[1][0]} value={element[1][1]} index={i} handleChange={handleChange} />;
    if(element[0] === 'image') return <Image key={i} image={element[1]} index={i} />;
    if(element[0] === 'log') return <LogEdit key={i} title={element[1]} logEntries={element[2]} index={i} />;
  });

  const cardIcons = {
    Appliance: applianceIcon,
    Material: materialIcon,
    PaintSwatch: paintIcon,
    Utility: utilityIcon,
    Contact: contactIcon,
    Plant: plantIcon,
    Pet: petIcon
  };


  return (
    editMode ?
      <>
        <div className={styles.Card}>
          <section>
            <p>Card Title: <input type="text" name='name' value={name} onChange={handleChange} /></p>
            <img src={cardIcons[type]} />
          </section>
          {mappedEditElements}
          <button onClick={handleUpdateCard}>Save Changes</button>
        </div>
      </>
      :
      <>
        <div className={styles.Card}>
          <a name={id}></a>
          <section>
            <h3>{name}</h3>
            <img src={cardIcons[type]} />
          </section>
          {mappedDisplayElements}
          <button onClick={() => setEditMode(true)}>Edit</button>
        </div>
      </>
  );

};

Card.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  content: PropTypes.array,
};

export default Card;
