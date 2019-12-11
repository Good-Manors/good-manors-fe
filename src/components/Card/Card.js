import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Text from '../elements/Text';
import TextEdit from '../elements/TextEdit';
import KeyValue from '../elements/KeyValue';
import Image from '../elements/Image';
import ImageEdit from '../elements/ImageEdit';
import Log from '../elements/Log';
import KeyValueEdit from '../elements/KeyValueEdit';
import LogEdit from '../elements/LogEdit';
import sampleData from '../../assets/sampleData';
import styles from './Card.css';
import tempIcon from '../../assets/temp-icon.png';

const name = sampleData.drawers[0].cards[0].name;
const type = sampleData.drawers[0].cards[0].type;
const content = sampleData.drawers[0].cards[0].content;


const Card = (addElement) => {

  const [editMode, setEditMode] = useState(false);

  const icons = {
    plant: '',
    paint: '',
    appliance: '',
    utility: '',
    structure: '',
    material: '',
    contact: '',
    pet: ''
  };

  const handleChange = ({ target }) => {
    target.name = target.value;
  };

  const updateCard = () => {
    console.log('updated card');
  };

  const mappedDisplayElements = content.map((element, i) => {
    if(element[0] === 'text') return <Text key={i} text={element[1]} index={i} />;
    if(element[0] === 'key-value') return <KeyValue key={i} entryKey={element[1][0]} value={element[1][1]} index={i} />;
    if(element[0] === 'image') return <Image key={i} image={element[1]} index={i} />;
    if(element[0] === 'log') return <Log key={i} logEntries={element[1]} index={i} />;
  });

  const mappedEditElements = content.map((element, i) => {
    if(element[0] === 'text') return <TextEdit text={element[1]} index={i} handleChange={handleChange} key={i} />;
    if(element[0] === 'key-value') return <KeyValueEdit entryKey={element[1][0]} value={element[1][1]} index={i} handleChange={handleChange} key={i} />;
    if(element[0] === 'image') return <ImageEdit image={element[1]} index={i} key={i} />;
    if(element[0] === 'log') return <LogEdit logEntries={element[1]} index={i} key={i} />;
  });


  return (
    editMode ?
      <>
        <div className={styles.CardEdit}>
          <section>
            <h3>{name}</h3>
            <img src={tempIcon} />
          </section>
          {mappedEditElements}
          <button onClick={updateCard}>Save Changes</button>
          <button onClick={addElement}>+ New Field</button>
        </div>
      </>
      :
      <>
        <div className={styles.Card}>
          <section>
            <h3>{name}</h3>
            <img src={tempIcon} />
          </section>
          {mappedDisplayElements}
          <button onClick={() => setEditMode(true)}>Edit</button>
        </div>
      </>
  );

};

Card.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  content: PropTypes.array,
  addElement: PropTypes.func
};

export default Card;
