import styled from 'styled-components';

export const HorizontalImage = styled.img`
  width: ${(props) => (props.expanded ? "600px" : "400px")};
  height: 300px;
  object-fit: cover;
`;

export const HorizontalSlider = styled.div`
  position: relative,
  display: flex;
  justify-content: center;
  align-items: center;
`;