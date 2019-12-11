
function uploadImageToCloudinary(image) {
  const URL = ' https://api.cloudinary.com/v1_1/good-manors/image/upload';
  let fd = new FormData();
  fd.append('upload_preset', 'devdev');
  fd.append('file', image);
  return fetch(URL, { method: 'POST', body: fd })
    .then(res => {
      if(!res.ok){
        throw `Unable to fetch from ${URL}`;
      }
      return res.json();
    });
}

export default uploadImageToCloudinary;

