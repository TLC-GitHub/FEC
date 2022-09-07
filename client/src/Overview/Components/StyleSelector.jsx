import React, {useState, useEffect, useRef} from 'react';
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
  opacity: 0;
`;

const List = styled.ul`
  list-style: none;
`;

const StylesContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding-top: 10px;
  width: 300px;
  height: 200px;
`;

const EachStyle = styled.div`
  position: relative;
  height: 60px;
`;

//const images = [
//   {image: 'https://ismages.unsplash.com/photo-1521338488115-be37accc5bd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80'}
// ];

const StyleSelector = ({styles, selectFromStyles}) => {

  const [resultImages, setResultsImages] = useState([]);
  const [style, setStyle] = useState(false);

  const [curStyle, setCurStyle] = useState('');
  const [curStyleId, setCurStyleId] = useState(0);
  const prevStyle = useRef(0);

  // useEffect(() => {
  //   axios.get(`${API_URL}/reviews?product_id=65651&sort=newest&count=200`, {
  //     headers: Authorization
  //   })
  //     .then((response) => {
  //       setResultsImages(response.data.results[0].photos)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // }, []);

  useEffect(() => {
    prevStyle.current = curStyleId
  }, [curStyleId]);

  useEffect(() => {
    prevStyle.current = 0;
    styles.map((style) => {
      let node = document.getElementById(style.style_id);
      node.style.opacity = '0';
    })
  }, [styles])

  const selectStyle = (e) => {
    // console.log("what style has been selected: ", e.target.name);
    let selected = styles.filter((style) => {
      return style.style_id === Number(e.target.name);
    });
    selectFromStyles(selected);
    setCurStyle(() => (selected[0].name));
    setCurStyleId(() => (selected[0].style_id));

    if (prevStyle.current !== 0) {
      let prevTarget = document.getElementById(prevStyle.current);
      prevTarget.style.opacity = '0';
    }
    let curTarget = document.getElementById(e.target.name);
    curTarget.style.opacity = '1';

  }

  // const thumbnails = resultImages.map((thumbnail, i) => {
  //   return (style ? <li key={i} onClick={() => setStyle(!style) }><Checkmark>&#10003;</Checkmark><Thumbnail src={thumbnail.url} /></li> : <li key={i} onClick = {() => setStyle(!style)}><Thumbnail src={thumbnail.url} /></li>);
  // });

return (
  <div>
    <div>
      <Style>Style ></Style>
      <Selected> {curStyle}</Selected>
    </div>
    <div>
      <StylesContainer>
        {styles.map((style) => (
          <EachStyle>
            <Checkmark id={style.style_id} className="checkmark"> &#10003; </Checkmark>
            <Thumbnail
              key={style.style_id}
              name={style.style_id}
              src={style.photos[0].thumbnail_url}
              onClick={selectStyle}
            />
          </EachStyle>
        ))}

      </StylesContainer>
    </div>
  </div>
);

};

export default StyleSelector;