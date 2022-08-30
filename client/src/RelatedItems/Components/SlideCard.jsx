import styled from "styled-components";

export const StyledSlider = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const StyledInactiveItems = styled.div`
  display: none;
`;

export const StyledActiveArrow = styled.svg`
  position: absolute;
  top: 50%;
  font-size: 2rem;
  cursor: pointer;
`;

export const StyledActiveLeft = styled.svg`
  position: absolute;
  top: 50%;
  font-size: 2rem;
  cursor: pointer;
  left: 20px;
`;

export const StyledActiveRight = styled.svg`
  position: absolute;
  top: 50%;
  font-size: 2rem;
  cursor: pointer;
  right: 20px;
`;

export const StyledInactiveArrow = styled.svg`
  display: none;
`;