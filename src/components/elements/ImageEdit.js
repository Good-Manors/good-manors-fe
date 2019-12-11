import React, { useState } from 'react';
import uploadImageToCloudinary from '../../services/cloudinary';
import fileReader from '../../services/readFile';

const ImageEdit = ({ image, handleImageChange }) => {
  const [file, setFile] = useState();
  // const [uploadedImage, setUploadedImage] = useState();

  const placeholderImage = require('../../assets/blank-file.png');

  return (
    <form onSubmit={} >
      <input type="file" id="input" onChange={({ target }) => { setFile(target.files[0]); }} />
      <img src={image || placeholderImage}/>
      <button>Submit</button>
    </form>
  );

};

export default ImageEdit;
