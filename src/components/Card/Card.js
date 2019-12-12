import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Text from '../elements/Text';
import TextEdit from '../elements/TextEdit';
import KeyValue from '../elements/KeyValue';
import Image from '../elements/Image';
import ImageEdit from '../elements/ImageEdit';
import Log from '../elements/Log';
import KeyValueEdit from '../elements/KeyValueEdit';
import LogEdit from '../elements/LogEdit';
import styles from './Card.css';
import tempIcon from '../../assets/temp-icon.png';
import { updateCard } from '../../services/homes';
import { setHome } from '../../actions/homeActions';

const Card = ({ name, type, content, _id, edit }) => {

  const [editMode, setEditMode] = useState(edit);
  const [editedName, setEditedName] = useState(name);
  const [editedContent, setEditedContent] = useState(content);
  const dispatch = useDispatch();

  //localContent will look like 
  // [ ['key-value',['key','']] , ['log', title, []] , ['text', title, ''] , ['image', ''] ]

  //TODO Update Card Name
  const handleNameChange = ({ target }) => {
    setEditedName(target.value);
  };

  const handleAddLogEntry = ({ target }) => {
    const logIndex = target.getAttribute('data-index');

    setEditedContent(editedContent.map((element, i) => {
      if(logIndex != i) {
        return element;
      }
      return [element[0], element[1], [...element[2], []]];
    }));
  };

  const handleRemoveLogEntry = ({ target }) => {
    const logIndex = target.getAttribute('data-index');
    const entryIndex = target.getAttribute('data-entry-index');

    setEditedContent(editedContent.map((element, i) => {
      if(logIndex != i) {
        return element;
      }

      const newLog = element[2].filter((_, idx) => {
        return entryIndex != idx;
      });

      return [element[0], element[1], newLog];
    }));
  };

  const handleLogEntryChange = ({ target }) => {
    const logIndex = target.getAttribute('data-index');
    const entryIndex = target.getAttribute('data-entry-index');

    setEditedContent(editedContent.map((element, i) => {
      if(logIndex != i) {
        return element;
      }
      const newLog = element[2].map((entry, idx) => {
        if(entryIndex != idx) {
          return entry;
        }
        return target.value;
      });

      return [element[0], element[1], newLog];
    }));
  };

  const handleElementChange = ({ target }) => {
    const changedIndex = target.getAttribute('data-index');

    setEditedContent(editedContent.map((element, i) => {
      if(changedIndex != i) {
        return element;
      }
      switch(element[0]) {
        case 'text':
          return [element[0], element[1], target.value];
        case 'key-value':
          return [element[0], [element[1][0], target.value]];
        default:
          break;
      }
    }));
  };

  const handleImageUpload = (url, idx) => {
    setEditedContent(editedContent.map((element, i)=>{
      if(idx != i){
        return element;
      }
      return [element[0], url];
    }));
  };

  const handleSaveChanges = () => {

    updateCard(_id, { name: editedName, content: editedContent, type: type })
      .then(home => {
        dispatch(setHome(home));
      })
      .then(() => {
        setEditMode(false);
      });
  };

  const mappedEditElements = editedContent.map((element, i) => {
    if(element[0] === 'text')
      return <TextEdit
        key={i}
        index={i}
        title={element[1]}
        text={element[2]}
        handleTextChange={handleElementChange}
      />;
    if(element[0] === 'key-value')
      return <KeyValueEdit
        key={i}
        index={i}
        entryKey={element[1][0]}
        value={element[1][1]}
        handleKeyValueChange={handleElementChange}
      />;
    if(element[0] === 'log')
      return <LogEdit
        key={i}
        index={i}
        title={element[1]}
        logEntries={element[2]}
        handleAddLogEntry={handleAddLogEntry}
        handleRemoveLogEntry={handleRemoveLogEntry}
        handleLogEntryChange={handleLogEntryChange}
      />;
    if(element[0] === 'image')
      return <ImageEdit
        key={i}
        index={i}
        handleImageUpload={handleImageUpload}
        image={element[1]}
      />;
  });

  const mappedDisplayElements = content.map((element, i) => {
    if(element[0] === 'text') return <Text key={i} title={element[1]} text={element[2]} index={i} />;
    if(element[0] === 'key-value') return <KeyValue key={i} entryKey={element[1][0]} value={element[1][1]} index={i} />;
    if(element[0] === 'log') return <Log key={i} title={element[1]} logEntries={element[2]} index={i} />;
    if(element[0] === 'image') return <Image key={i} image={element[1]} index={i} />;
  });

  return (
    editMode ?
      <>
        <div className={styles.Card}>
          <section>
            <p>Card Title: <input type="text" name='name' value={editedName} onChange={handleNameChange} /></p>
            <img src={tempIcon} />
          </section>
          {mappedEditElements}
          <button onClick={handleSaveChanges}>Save Changes</button>
        </div>
      </>
      :
      <>
        <div className={styles.Card}>
          <a name={_id}></a>
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
  _id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  content: PropTypes.array,
  edit: PropTypes.bool
};

export default Card;
