import React, { useState, createRef } from 'react';
import SelectFiles from './selectFiles';

const Upload = () => {
  const [filename, setFilename] = useState([]);
  const inputRef = createRef();
  const changeFiles = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setFilename(Array.from(e.target.files)); // sets the name of selected files into state
    console.log('I am here');
  };
  const onButtonClick = () => {
    inputRef.current.click();
    console.log('button has been clicked');
  };
  return (
      <>
        <SelectFiles
        onChange={ changeFiles }
        onClick={ onButtonClick }
        ref={ inputRef }
        />
        <div>
        {filename.map((file) => (
            <div
            key={ file.lastModified }
            >{ file.name}</div>
        ))
        }
        </div>
        </>
  );
};

export default Upload;
