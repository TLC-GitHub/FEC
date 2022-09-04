import styled from "styled-components";

// export const StyledSlider = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-wrap: wrap;
// `;

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
  width: 200px;
  height: 100%;
  border: 1px solid #A2B5BB;
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 70%;
`;

export const AddOutfitBtn = styled.div`
  width: 253px;
  height: 320px;
  cursor: pointer;
  border: 1px solid #A2B5BB;
`;

export const OutfitButton = styled.button`
  width: 248.1px;
  height: 100%;
  margin-left: 0px;
  padding: 0px;
  cursor: pointer;
  border: 1px solid #A2B5BB;
  background-color: white;
`;

export const StyledStarBtn = styled.div`
  position: absolute;
  left: 70%;
  top: 3%;
`;

export const ModalBox = styled.div`
  position: fixed;
  top: 10%;
  width: 500px;
  height: 500px;
  background-color: #000;
`;

export const Table = styled.table`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  table-layout: fixed;
`;

const tableDataStyles = [`
  border-bottom: 1px solid #ddd;
  text-align: center;
  padding: 1rem 0rem;
`];

export const StyledHead = styled.th(tableDataStyles);
export const StyledCell = styled.td(tableDataStyles);

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
    color: #f80;
  }
`;