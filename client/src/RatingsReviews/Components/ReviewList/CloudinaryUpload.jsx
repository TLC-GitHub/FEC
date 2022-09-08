import React, { useState } from 'react';
import styled from 'styled-components';
import { FaImage, FaFileImport } from 'react-icons/fa';
import axios from 'axios';

var cloudName = "dwnmhqqjn";
var uploadPreset = "fec_test";


function CloudinaryUpload ({ addFromCloud, postPhoto }) {
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
          var firstPost = {
            url: result.info.secure_url
          }
          setImage1(first);
          addFromCloud(first);
          postPhoto(result.info.secure_url);

        } else if (!image2) {
          var second = {
            id: result.info.public_id,
            url: result.info.secure_url
          }
          var secondPost = {
            url: result.info.secure_url
          }
          setImage2(second);
          addFromCloud(second);
          postPhoto(result.info.secure_url);

        } else if (!image3) {
          var third = {
            id: result.info.public_id,
            url: result.info.secure_url
          }
          var thirdPost = {
            url: result.info.secure_url
          }
          setImage3(third);
          addFromCloud(third);
          postPhoto(result.info.secure_url);

        } else if (!image4) {
          var fourth = {
            id: result.info.public_id,
            url: result.info.secure_url
          }
          var fourthPost = {
            url: result.info.secure_url
          }
          setImage4(fourth);
          addFromCloud(fourth);
          postPhoto(result.info.secure_url);

        } else if (!image5) {
          var fifth = {
            id: result.info.public_id,
            url: result.info.secure_url
          }
          var fifthPost = {
            id: result.info.public_id,
            url: result.info.secure_url
          }
          setImage5(fifth);
          addFromCloud(fifth);
          postPhoto(result.info.secure_url);
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
      <ClickMePls onClick={uploadImageWidget}>
        UPLOAD PHOTO
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
  color: #1E2022;

  border-radius: 15px;
  font-size: 25px;
  &:hover {
    opacity: 80%;
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
  color: #52616B;
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