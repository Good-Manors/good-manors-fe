import React from 'react';
// import PropTypes from 'prop-types';
import uploadImageToCloudinary from '../../services/cloudinary';

// let fd = new FormData();
const upload = new File();


const ImageEdit = () => {

  return (
    <>
      <input type="file" value={upload} />
      <button onSubmit={() => {
        uploadImageToCloudinary(),
          console.log(upload);
      }}>Submit</button>
    </>
  );

};

export default ImageEdit;
