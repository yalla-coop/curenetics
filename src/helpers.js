// validation function for file uploads
const filenameCheck = (filename) => {
  const check = filename.filter((file) => {
    const nameArr = file.name.split('.');

    return nameArr[nameArr.length - 1] === 'pdf';
  });
  return check.length;
};

export default filenameCheck;
