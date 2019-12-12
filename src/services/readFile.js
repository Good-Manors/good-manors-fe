export default (file) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  return new Promise((resolve, reject) => {
    reader.onload = () => {
      if(reader.error) return reject(reader.error);
      resolve(reader.result);
    };
  });
};
