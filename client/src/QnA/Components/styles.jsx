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


export const ButtonContainer = styled.div`
  flex-direction: row;
`
/*
QUESTION LIST MODULE
----------------------------------------
*/

export const QuestionContainer = styled.div`
  display: flex;
  position: static;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  justify-content: flex-start;
  max-height: 900px;
  max-width:  1168px;
`

export const QuestionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`



/*
QUESTION CARD
----------------------------------------
*/

export const QuestionCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 50rem;
  margin: 0em .25em 0em 3em;
`

export const QuestionBody = styled.h1`
  display: flex;
  width: 100%;
  height: 40%;
  flex-wrap: nowrap;
  font-size: 25px;
  width: 40rem;
`

export const QuestionInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: .4rem;
  width: 30rem;
  align-items: center;

`

/*
ANSWER LIST MODULE
----------------------------------------
*/

export const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 40rem;
  overflow: auto;
`


/*
ANSWER CARD
----------------------------------------
*/

export const AnswerCardContainer = styled.div`
  font-size: 14px;
  margin-top: 0.5rem;
  gap: 1rem;
  max-height: 20rem;

`
export const Answer = styled.div`
  justify-content: flex-start;
  margin-top: .25rem;
  margin-bottom: .75rem;
  assign-align: base-line;
  font-size: 18px;
`

export const AnswerInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 1rem;

`
export const AnswerStatus = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 20rem;
`

export const AnswerDetails = styled.div`
  width: 15rem;
  font-weight: 100;
`

export const ImageWrapper = styled.div`
  display: flex;
  gap: .25rem;
`
export const Images = styled.img`
  width: 10rem;
  height: 10rem;
  margin-right: .25rem;
  margin-bottom: .25rem;
  border: 1px solid grey;
  border-radius: 5px;
  overflow: hidden;
`

export const LoadMoreAnswers = styled.div`

`


/*
SEARCH BAR
----------------------------------------
*/

export const SearchbarInput = styled.input`
  border-radius: 15px;
  border-style: inset;
  height: 2em;
  width: 45em;
  text-indent: 20px;
  margin-right: 2em;
`

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 3rem;
  margin-bottom: 2rem;
  width: 50%;
`
/*
MODAL WINDOWS
--------------------------------------
*/

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
export const ImageModalContainer = styled.div`
  z-index: 1050;
  background: transparent;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 50%;
  outline: 0;
  margin-left: -25%;
  margin-top: -15%;
  border-radius: 10px;
  padding: 2rem;
`


export const ModalContainer = styled.div`
  z-index: 1050;
  background: #F0F5F9;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 50%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  margin-left: -25%;
  margin-top: -15%;
  border-radius: 10px;
  padding: 2rem;
`

export const ModalImageWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`



export const ModalThumbnails = styled.img`
  max-height: 10rem;
  max-width: 10rem;

`

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

export const ModalForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 100;
  position: absolute;
  top: 50%; left: 50%;
  height: 50%;
  width: 50%;
  margin-left: -25%;
  margin-top: -15%;
  border-radius: 3px;
  font-size: 1rem;
`;

export const ImageModalForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column-reverse;
  z-index: 100;
  position: absolute;
  top: 50%; left: 50%;
  height: 50%;
  width: 50%;
  margin-left: -25%;
  margin-top: -15%;
  border-radius: 3px;
  font-size: 1rem;
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ModalCloseButton = styled.button`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: .5;
  color: white;
  cursor: pointer;
  border: none;
  margin: 0px 70px 0px 0px;
  &:hover {
    opacity: .5;
    color: black;
  }
  width: 3rem;
  align-self: flex-start;
`;

export const ExpandedImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  overflow: hidden;
`

export const ModalTextArea = styled.textarea`
  height: 15rem;
  width: 35rem;
  resize: none;
`
