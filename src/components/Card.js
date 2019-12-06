import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Text from './elements/Text';
import TextEdit from './elements/TextEdit';
import KeyValue from './elements/KeyValue';
import Image from './elements/Image';
import Log from './elements/Log';
import KeyValueEdit from './elements/KeyValueEdit';

const Card = ({ name, type, elements }) => {

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

  const mappedDisplayElements = elements.map((element, i) => {
    if(element[0] === 'text') return <Text text={element[1]} index={i} />;
    if(element[0] === 'key-value') return <KeyValue entryKey={element[1][0]} value={element[1][1]} index={i} />;
    if(element[0] === 'image') return <Image image={element[1]} index={i} />;
    if(element[0] === 'log') return <Log logEntries={element[1]} index={i} />;
  });

  const mappedEditElements = elements.map((element, i) => {
    if(element[0] === 'text') return <TextEdit text={element[1]} index={i} handleChange={handleChange} />;
    if(element[0] === 'key-value') return <KeyValueEdit entryKey={element[1][0]} value={element[1][1]} index={i} handleChange={handleChange} />;
    if(element[0] === 'image') return <Image image={element[1]} index={i} />;
    if(element[0] === 'log') return <Log logEntries={element[1]} index={i} />;
  });

  return (
    editMode ?
      <>
        <h2>{name}</h2>
        <img src={icons[{ type }]} />
        {mappedEditElements}
      </>
      :
      <>
        <h2>{name}</h2>
        <img src={icons[{ type }]} />
        {mappedDisplayElements}
        <button onClick={() => setEditMode(true)}>Edit</button>
      </>
  );

};

Card.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  elements: PropTypes.array,
};

export default Card;
