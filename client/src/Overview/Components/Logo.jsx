import React, {useState} from 'react';
import styled from 'styled-components';

function Logo () {
  const [data, setData] = useState('');
  const getData = () => setData(data);

  const Header = styled.h1 `
    z-index: -1;
  `;

  return (
   <Header>Stylish Skin Coverings</Header>
  );
}

export default Logo;