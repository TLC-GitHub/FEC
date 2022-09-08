import styled from 'styled-components';

export const HorizontalImage = styled.img`
  width: ${(props) => (props.expanded ? "60rem" : "50rem")};
  height: 30rem;
  object-fit: cover;
`;

export const HorizontalSlider = styled.div`
  position: relative,
  display: flex;
  justify-content: center;
  align-items: center;
`;