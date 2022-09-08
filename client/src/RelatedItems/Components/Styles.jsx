import styled from "styled-components";

export const StyledSlider = styled.div`
  position: relative;
  display: flex;
  height: 320px;
`;

export const InnerSlider = styled.div`
  display: flex;
  gap: 14px;
  width: 100%;
  height: 100%;
`;

export const StyledInactiveItems = styled.div`
  display: none;
`;

export const StyledArrow = styled.div`
  align-self: center;
  font-size: 2rem;
  cursor: pointer;
`;

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 100%;
  border: 1px solid #C9D6DF;
  border-radius: 10px;
  overflow: hidden;
  background-color: #F0F5F9;
  `;
  // border: 1px solid #A2B5BB;

export const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 70%;
`;

export const ImageStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${ImgContainer}:hover & {
    opacity: 0.8;
  }
`;

export const StyledStarBtn = styled.div`
  position: absolute;
  left: 80%;
  top: 3%;
`;

export const CornerButton = styled.button`
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0);
  color: #7F8487;
  cursor: pointer;
`;

export const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30%;
  background: rgb(0, 0, 0, 0.5);
  color: #f1f1f1;
  transition: .1s ease;
  font-size: 20px;
  text-align: center;
  visibility: hidden;
  cursor: pointer;

  ${ImgContainer}:hover & {
    visibility: visible;
    opacity: 0.8;
  }
`;

export const ImagesSlider = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const ImageSlide = styled.img`
  width: 30%;
  height: 100%;
  object-fit: cover;
`;

export const OutfitButton = styled.button`
  min-width: 220px;
  height: 100%;
  margin-left: 0px;
  padding: 0px;
  cursor: pointer;
  border: 1px solid #C9D6DF;
  border-radius: 10px;
  background-color: white;
  &:hover {
    background-color: #EEEEEE;
    font-size: 1rem;
  }
`;

export const Star = styled.span`
  display: inline-block;
  position: relative;
  font-size: 1.2rem;
  color: #ddd;

  &:after {
    content: "\\2605\\2605\\2605\\2605\\2605";
    position: absolute;
    left: 0;
    top: 0;
    width: ${(props) => props.percentage};
    overflow: hidden;
    color: #ffc107;
    color: #1A1A1A;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: .5;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`;

export const Modal = styled.div`
  z-index: 100;
  background-color: #F0F5F9;
  position: relative;
  margin: 1.75rem auto;
  padding: 2rem;
  border-radius: 10px;
  max-width: 700px;
  max-height: 700px;
  overflow-y: auto;
  `;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ModalCloseBtn = styled.button`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  opacity: .3;
  cursor: pointer;
  border: none;
`;

export const Table = styled.table`
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  table-layout: fixed;
  position: relative;
`;

export const TableHead = styled.thead`
  position: sticky;
  top: 0;
  background: #F0F5F9;
`;

const tableDataStyles = [`
  border-bottom: 1px solid #ddd;
  text-align: center;
  padding: 1.5rem 0rem;
`];

export const StyledHead = styled.th(tableDataStyles);
export const StyledCell = styled.td(tableDataStyles);