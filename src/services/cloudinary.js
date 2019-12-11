// require('dotenv').load();
const cloudinary = require('cloudinary-core').v2;

function uploadImageToCloudinary(image) {
  const URL = ' https://api.cloudinary.com/v1_1/good-manors/image/upload';
  let fd = new FormData();
  fd.append('upload_preset', 'devdev');
  fd.append('file', image);
  return fetch(URL, { method: 'POST', body: fd });
}

export default uploadImageToCloudinary;

