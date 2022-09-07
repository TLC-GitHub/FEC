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
  position: absolute;
  top: 3px;
  left: 35px;
`;

const List = styled.ul`
  list-style: none;
`;

const StylesContainer = styled.div`
  position: relative;
  display: flex;
  gap: 15px;
  width: 500px;
  height: 200px;
  background-color: yellow;
`;

const EachStyle = styled.div`
  position: relative;

`;

//const images = [
//   {image: 'https://ismages.unsplash.com/photo-1521338488115-be37accc5bd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80'}
// ];

const StyleSelector = ({styles, selectFromStyles}) => {
  console.log("sytle selector - what is the current product: ", styles);
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

  const selectStyle = (e) => {
    console.log("what style has been selected: ", e.target.id);
    // selectFromStyles(Number(e.target.id));
    let selected = styles.filter((style) => {
      console.log("in filter: ", style)
      return style.style_id === Number(e.target.id);
    });
    console.log("selected style array: ", selected);
    selectFromStyles(selected);

    let node = document.getElementById(e.target.id);
    // node.innerHTML += "&#10003";
    node.insertAdjacentHTML('afterend', `<Checkmark>&#10003;</Checkmark>`);
  }

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
      <StylesContainer>
        {styles.map((style) => (
          <EachStyle>

          {/* <div key={style.style_id}> */}
            <Checkmark id={style.style_id} >
            &#10003; </Checkmark>
              <Thumbnail
                key={style.style_id}
                id={style.style_id}
                src={style.photos[0].thumbnail_url}
                onClick={selectStyle}
                >
              </Thumbnail>
          {/* </div> */}
          </EachStyle>
        ))}

      </StylesContainer>
    </div>
  </div>
);

};

export default StyleSelector;