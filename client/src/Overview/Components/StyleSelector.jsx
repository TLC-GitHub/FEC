import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Authorization from '../../../../config.js';
const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp';

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

//const images = [
//   {image: 'https://ismages.unsplash.com/photo-1521338488115-be37accc5bd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80'}
// ];

const StyleSelector = () => {
  const [resultImages, setResultsImages] = useState([]);
  const [style, setStyle] = useState(false);

  useEffect(() => {
    axios.get(`${API_URL}/reviews?product_id=65651&sort=newest&count=200`, {
      headers: Authorization
    })
      .then((response) => {
        setResultsImages(response.data.results[0].photos)
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  const thumbnails = resultImages.map((thumbnail, i) => {
    return (style ? <li key={i} onClick={() => setStyle(!style) }><Checkmark>&#10003;</Checkmark><Thumbnail src={thumbnail.url} /></li> : <li key={i} onClick = {() => setStyle(!style)}><Thumbnail src={thumbnail.url} /></li>);
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