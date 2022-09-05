import styled from "styled-components";

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
  background: white;
  position: relative;
  margin: 1.75rem auto;
  border-radius: 10px;
  max-width: 700px;
  max-height: 800px;
  padding: 2rem;
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
  background: white;
`;

const tableDataStyles = [`
  border-bottom: 1px solid #ddd;
  text-align: center;
  padding: 1rem 0rem;
`];

export const StyledHead = styled.th(tableDataStyles);
export const StyledCell = styled.td(tableDataStyles);