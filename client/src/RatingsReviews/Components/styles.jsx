import styled from 'styled-components';

export const Tile = styled.div`
  margin: 50px 15% 50px 0;
`;

export const User = styled.div`
  // margin-left: 70%;
  float: right;
`;

export const U = styled.u`
  cursor: pointer;
  color: #FF0080;
`;

export const Img = styled.img`
  height: 150px;
  margin: .25em;
  cursor: pointer;
  border-radius: .5em;
`;

export const Response = styled.div`
  background-color: #D3D3D3;
  padding: 1.2em;
  border-radius: .5em;
`;

export const Star = styled.span`
  display: inline-block;
  position: relative;
  font-size: 25px;
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

