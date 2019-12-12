import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uploadImageToCloudinary from '../../services/cloudinary';
import fileReader from '../../services/readFile';

const ImageEdit = ({ imageURL, handleImageUpload, index }) => {
  const [file, setFile] = useState();
  // const [uploadedImage, setUploadedImage] = useState();

  const placeholderImage = require('../../assets/blank-file.png');

  return (
    <form onSubmit={event => {
      event.preventDefault();

      // let file = event.target;

      fileReader(file)
        .then(result => {
          return uploadImageToCloudinary(result);
        })
        .then(result => {
          handleImageUpload(result.url, index);
          // result.delete_token <-- This token allows us to delete images from the front end.
          // returnUrl = result.url;
        });
    }} >
      <input type="file" id="input"
        onChange={({ target }) => { setFile(target.files[0]); }} 
      />
      <img src={imageURL || placeholderImage}/>
      <button>Submit</button>
    </form>
  );

};

ImageEdit.propTypes = {
  imageURL: PropTypes.string,
  handleImageUpload: PropTypes.func,
  index: PropTypes.number
};

export default ImageEdit;
