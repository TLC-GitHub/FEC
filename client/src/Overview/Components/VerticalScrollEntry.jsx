import styled from 'styled-components';

export const VerticalImage = styled.img`
  width: 10rem;
  height: 10rem;
  bottom: 21rem;
  left: 6.5rem;
  object-fit: cover;
  z-index: 1;
  position:absolute;
  border: 3px solid black;

`;

export const VerticalSlider = styled.div`
  position: relative,
  display: flex;
  align-items: center;
  column-gap: 10px
  margin: 3px;
  justify-content: space-between;

`;