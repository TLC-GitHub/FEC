import styled from 'styled-components';

export const Tile = styled.div`
  margin: 25px 2% 25px 2%;
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

export const StyleList = styled.div`
  height: 950px;
  overflow: hidden;
  overflow-y: scroll;
  width: 800px;
`;

export const ReviewListButton = styled.button`
  appearance: none;
  background-color: transparent;
  border: 2px solid #1A1A1A;
  border-radius: 15px;
  box-sizing: border-box;
  color: #3B3B3B;
  cursor: pointer;
  display: inline-block;
  // font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 5px 15px 5px 15px;
  min-height: 60px;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 23%;
  will-change: transform;
  &:disabled {
    pointer-events: none;
  }
  &:hover {
    color: #fff;
    background-color: #1A1A1A;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }
  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;