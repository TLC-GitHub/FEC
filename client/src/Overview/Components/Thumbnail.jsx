import React, {useState} from 'react';
import styled from 'styled-components';


const ThumbnailImage = styled.img`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  border-radius: 35px;
  object-fit: cover;
`;

const Checkmark =styled.div`
  width: 20px;
  height: 20px;
  border: solid black 1px;
  border-radius: 15px;
  background-color: white;
  z-index: 1;
  position: relative;
  top: 15px;
  left: 35px;
`;

const Thumbnail = (props) => {
  const [style, setStyle] = useState(false);
  const checked = style ? <div><Checkmark>&#10003;</Checkmark><Thumbnail src="" /></div>:<div><Thumbnail src="" /></div>;

  return (
    <li onClick= {(event) => setStyle(!style)}>{checked}</li>
  );
}

export default Thumbnail;