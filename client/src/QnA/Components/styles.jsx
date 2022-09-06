import styled from 'styled-components';
/*
GENERAL USAGE
----------------------------------------
*/

export const Button = styled.button`
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
`

export const BigButton = styled.button`
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
  ;
`

/*
QUESTION LIST MODULE
----------------------------------------
*/

export const QuestionContainer = styled.div`
  max-height: 500px;
  max-width: 100%;
  overflow: auto;
  justify-content: space-between;
  border: 4px solid black;
`



/*
QUESTION CARD
----------------------------------------
*/

export const QuestionCardContainer = styled.div`
  display: flex;
  max-height: 300%;
  max-width: 100%;
  overflow: auto;
  border: 4px solid yellow;
  flex-direction: column;
`

export const QuestionBody = styled.h1`
  display: flex;
  width: 100%;
  height: 40%;
  flex-wrap: nowrap;
  border: 4px solid orange;
`

export const QuestionInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  border: 4px solid red;
  gap: .8rem;
`

/*
ANSWER LIST MODULE
----------------------------------------
*/

export const AnswerContainer = styled.div`
  display: flex;
  max-height: 300px;
  align-content: space-between;
  flex-direction: column;
  border: 4px solid red;
`


/*
ANSWER CARD
----------------------------------------
*/

export const AnswerCardContainer = styled.div`
  assign-align: baseline;
  font-size: 14px;
  margin-top: 5px;
  border: 4px solid blue;
`
export const Answer = styled.div`
  justify-content: flex-start;
  margin-top: 15px;
  margin-bottom: 15px;
  assign-align: base-line;
  border: 4px solid green;
`

export const AnswerInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  border: 4px solid orange
`
export const AnswerStatus = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-evenly;
  border: 4px solid pink;
  width: 20rem;
`

export const AnswerDetails = styled.div`
  border: 4px solid green;
  width: 15rem;
`

export const ImageWrapper = styled.div`
  display: flex;
  width: 100px;
  justify-content: space-between;
  border: 4px solid black
`
export const Images = styled.img`
  max-width: 150px;
  max-height: 150px;
  padding: 5px;
`


/*
SEARCH BAR
----------------------------------------
*/

export const SearchbarInput = styled.input`
  width: 95%;
  height: 28px;
  text-align: center;
  font-size: 25px
  position: absolute;
`

export const SearchBarContainer = styled.div`


`

/*
MODAL WINDOWS
--------------------------------------
*/

export const ModalContainer = styled.div`
  z-index: 100;
  background: black;
  position: absolute;
  top: 40px; left: 40px;
  margin: 1.75rem auto;
  border-radius: 3px;
  max-width: 500px;
  padding: 2rem;
`
export const Form = styled.form`
  display: flex;
  position: relative;
  background: white;
  margin: 1.75rem auto;
  border-radius: 3px;
  max-width: 300px;
  height: 300px;
  padding: 2rem;
`
export const ExitFormButton = styled.button`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1;
  color: black;
  opacity: .8;
  cursor: pointer;
  border: none;
`

/*
IMAGE MODAL WINDOW
----------------------------------------
*/

export const ModalThumbnails = styled.img`
  max-height: 80px;
  max-width: 80px;

`



