// require('dotenv').load();
const cloudinary = require('cloudinary-core').v2;

function uploadImageToCloudinary(image) {
  // const URL = ' https://api.cloudinary.com/v1_1/good-manors/image/upload';
  // const config = 
  // let fd = new FormData();
  // // fd.append('upload_preset', config.uploadPreset);
  // fd.append('file', image);
  // console.log(image);
  // return fetch(URL, { method: 'POST', body: fd });

  cloudinary.config({ 
    cloud_name: 'good-manors', 
    api_key: '452748136837818', 
    api_secret: 'FWvbC_NGRXqioAY-lfpacSulcRE' 
  });

  
  cloudinary.uploader.upload(image, { tags: 'Sample ' })
    .then(image => {
      console.log(image);
    })
    .catch(error => {
      throw new Error(error);
    });
}

export default uploadImageToCloudinary;

