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
`;

export const InnerSlider = styled.div`
  display: flex;
  gap: 14px;
  width: 100%;
  height: 320px;
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
`];

export const StyledHead = styled.th(tableDataStyles);
export const StyledCell = styled.td(tableDataStyles);