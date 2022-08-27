import React, {useState} from 'react';
import styled from 'styled-components';

// const Header = styled.h1 `
// z-index: -1;
// `;

const Logo = () => {
  const [data, setData] = useState('');
  const getData = () => setData(data);



  return (
   <h1>lelelime</h1>
  );
}

export default Logo;