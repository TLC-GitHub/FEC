import styled from "styled-components";

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

