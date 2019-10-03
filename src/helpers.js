// validation function for file uploads
// > perhaps this should reside in a folder - think data filter functions
const filenameCheck = (filename) => {
  const check = filename.filter((file) => {
    const nameArr = file.name.split('.');

    return nameArr[nameArr.length - 1] === 'pdf';
  });
  return check.length;
};

export default filenameCheck;
