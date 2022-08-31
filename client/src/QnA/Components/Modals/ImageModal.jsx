import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ImageModal({setImageModal, setState}) {

  const [currentFiles, setCurrentFiles] = setState([]);
  const [maxFiles, setMaxFiles] = setState(false);


  useEffect(() => {
    handlePhotos()
  }, [maxFiles])


  const handleChange = (e) => {
    let selectedFile = e.target.files[0];
    if (currentFiles.length = 5) {
      setMaxFiles(true);
    } else {
      setCurrentFiles(...currentFiles, selectedFile);
    }
  }


  const handlePhotos = () => {
    setState(prev => ({
      [photos]: currentFiles
    }))
  }

  return (
    <div className="image-modal">
      <div className='image-modal-container'>
        <form onSubmit={handlePhotos}>
          {/* {maxFiles
          ? <div></div> */}
          {/* : */}
          <input id='upload-photos' type="file" multiple accept=".jpeg, .jpg, .png" onChange={handleChange} value={currentFiles}/>
          {/* } */}
        </form>
      </div>
    </div>
  )
}

export default ImageModal;