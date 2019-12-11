import React, { useState } from 'react';
import uploadImageToCloudinary from '../../services/cloudinary';
import fileReader from '../../services/readFile';

const ImageEdit = () => {
  const [file, setFile] = useState();
  const [returnUrl, setReturnUrl] = useState();
  
  const uploadedImage = returnUrl || '../../assets/blank-file.png';

  return (
    <form onSubmit={event => {
      event.preventDefault();
      fileReader(file)
        .then(result => {
          return uploadImageToCloudinary(result);
        })
        .then(result => {
          console.log(result.url);
          returnUrl = result.file;
        });
    }}>
      <input type="file" id="input" onChange={({ target }) => { setFile(target.files[0]); }} />
      <img src={uploadedImage} ></img>
      <button>Submit</button>
    </form>
  );

};

export default ImageEdit;
