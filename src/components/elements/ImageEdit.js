import React, { useState } from 'react';
import uploadImageToCloudinary from '../../services/cloudinary';
import fileReader from '../../services/readFile';

const ImageEdit = () => {
  const [file, setFile] = useState();

  return (
    <form onSubmit={() => {
      fileReader(file)
        .then(result => {
          uploadImageToCloudinary(result);
        })
        .then(res => {
          console.log(res);
        });
    }}>
      <input type="file" id="input" onChange={({ target }) => { setFile(target.files[0]); }} />
      <button>Submit</button>
    </form>
  );

};

export default ImageEdit;
