import React from 'react';
// import PropTypes from 'prop-types';
import uploadImageToCloudinary from '../../services/cloudinary';

// let fd = new FormData();


const ImageEdit = () => {

  return (
    <>
      <input type="file"  />
      <button onSubmit={uploadImageToCloudinary}>Submit</button>
    </>
  );

};

export default ImageEdit;
