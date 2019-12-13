import React, { useState } from 'react';
import PropTypes from 'prop-types';
import fileReader from '../../services/readFile';
import styles from './ImageEdit.css';

const ImageEdit = ({ imageURL, handleImageUpload, index }) => {
  // const [file, setFile] = useState();
  const [uploadedImage, setUploadedImage] = useState(imageURL);

  // const placeholderImage = require('../../assets/blank-file.png');

  return (
    <section className={styles.ImgEdit}>
      <img className={styles.Image} src={uploadedImage} />
      <input type="file" id="input"
        onChange={({ target }) => {
          // setFile(target.files[0]);
          fileReader(target.files[0])
            .then(result => {
              setUploadedImage(result);
              handleImageUpload(result, index);
            });
        }}
      />
    </section>
  );

};

ImageEdit.propTypes = {
  imageURL: PropTypes.string,
  handleImageUpload: PropTypes.func,
  index: PropTypes.number
};

export default ImageEdit;
