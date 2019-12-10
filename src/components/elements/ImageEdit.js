import React from 'react';
import PropTypes from 'prop-types';
const cloudName = 'good-manors';

function uploadFile(file) {
  var url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
  var xhr = new XMLHttpRequest();
  var fd = new FormData();
  xhr.open('POST', url, true);
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
}


const ImageEdit = ({ image }) => {

  return (
    <input type="file" src={image} onSubmit={uploadFile} />
  );

};

Image.propTypes = {
  image: PropTypes.string,
};

export default ImageEdit;
