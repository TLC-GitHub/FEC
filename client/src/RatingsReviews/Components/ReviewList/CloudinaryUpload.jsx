import React, { useState } from 'react';
import styled from 'styled-components';
import { FaImage, FaFileImport } from 'react-icons/fa';
import axios from 'axios';

var cloudName = "dwnmhqqjn";
var uploadPreset = "fec_test";


function CloudinaryUpload ({ addFromCloud }) {
  var [image1, setImage1] = useState('')
  var [image2, setImage2] = useState('')
  var [image3, setImage3] = useState('')
  var [image4, setImage4] = useState('')
  var [image5, setImage5] = useState('')

  var uploadImageWidget = () => {

    var myCropWidget = window.cloudinary.createUploadWidget({
      cloudName: cloudName,
      uploadPreset: uploadPreset
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        // console.log('THIS IS THE PHOTO INFO', result.info)
        if (!image1) {
          var first = {
            id: result.info.public_id,
            url: result.info.secure_url
          }
          setImage1(first);
          addFromCloud(first);

        } else if (!image2) {
          var second = {
            id: result.info.public_id,
            url: result.info.secure_url
          }
          setImage2(second);
          addFromCloud(second)

        } else if (!image3) {
          var third = {
            id: result.info.public_id,
            url: result.info.secure_url
          }
          setImage3(third);
          addFromCloud(third);
        } else if (!image4) {
          var fourth = {
            id: result.info.public_id,
            url: result.info.secure_url
          }
          setImage4(fourth);
          addFromCloud(fourth);
        } else if (!image5) {
          var fifth = {
            id: result.info.public_id,
            url: result.info.secure_url
          }
          setImage5(fifth);
          addFromCloud(fifth);
        }
      }
    })
    myCropWidget.open()
  };

  var photosArray = () => {
    let array = [];
  }

  return (
    <Cloud>
      <></>
      {/* {console.log('addFromCloud', addFromCloud)} */}
      {/* {console.log('Image 1', image1)} */}
      {/* {console.log('Image 2', image2)} */}
      {/* {console.log('Image 3', image3)} */}
      {/* {console.log('Image 4', image4)} */}
      {/* {console.log('Image 5', image5)} */}
      {/* {console.log('ALL', [image1, image2, image3, image4, image5])} */}

      <ClickMePls onClick={uploadImageWidget}>
        UPLOAD PHOTO
        {/* <FaFileImport size={30} /> */}
      </ClickMePls>
      <GroupDivPic>
        <DivPic>
          {image1 ? <Img src={image1.url} /> : <FaImage size={100}/>}
        </DivPic>
        <DivPic>
          {image2 ? <Img src={image2.url} /> : <FaImage size={100}/>}
        </DivPic>
        <DivPic>
          {image3 ? <Img src={image3.url} /> : <FaImage size={100}/>}
        </DivPic>
        <DivPic>
          {image4 ? <Img src={image4.url} /> : <FaImage size={100}/>}
        </DivPic>
        <DivPic>
          {image5 ? <Img src={image5.url} /> : <FaImage size={100}/>}
        </DivPic>
      </GroupDivPic>
    </Cloud>
  )
}


export default CloudinaryUpload;

const Cloud = styled.div`
  display: flex;
  flex-direction: column;
`;

const ClickMePls = styled.u`
  display: flex;
  justify-content: center;
  cursor: pointer;
  color: black;

  border-radius: 15px;
  font-size: 25px;
  &:hover {
    opacity: 50%;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }
  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;

const GroupDivPic = styled.div`
  display: flex;
  justify-content: center;
`;

const DivPic = styled.div`
  display: flex;
  flex-direction: center;
  color: gray;
  margin: 0em 0.5em 0em 0.5em;
  border-radius: 15px;
`;

const Img = styled.img`
  max-height: 90px;
  max-width: 180px;
  height: auto;
  width: auto;
  border-radius: 15px;
  border-style: dashed;
  border-width: thick;
`;