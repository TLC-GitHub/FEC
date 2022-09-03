import React, {useState} from 'react';
import styled from 'styled-components';

const Style = styled.span`
  font-weight: bold;
  text-transform: uppercase;
`;

const Selected = styled.span`
  font-weight: lighter;
  text-transform: uppercase;
`;

const Thumbnail = styled.img`
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

const List = styled.ul`
  list-style: none;
`;

const images = [
  {image: 'https://images.unsplash.com/photo-1521338488115-be37accc5bd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80'}
];

const StyleSelector = () => {
  const [style, setStyle] = useState(false);

  // will take more data
  const thumbnails = images.map((thumbnail, i) => {
    return (style ? <li key={i} onClick={() => setStyle(!style) }><Checkmark>&#10003;</Checkmark><Thumbnail src={thumbnail.image} /></li> : <li key={i} onClick = {() => setStyle(!style)}><Thumbnail src={thumbnail.image} /></li>);
  });
return (
  <div>
    <div>
      <Style>Style ></Style>
      <Selected>Selected Style</Selected>
    </div>
    <div>
      <List>
      {thumbnails}
      </List>
    </div>
  </div>
);

};

export default StyleSelector;