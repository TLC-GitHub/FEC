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
  font-size: 20px;
  height: 30px;
  flex-basis: 60px;
  margin-right: 20px;
  display: fixed;
`



export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin: 1%;
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
`

export const QuestionBody = styled.h1`
  display: flex;
  width: 100%;
  height: 40%;
  flex-wrap: nowrap;
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
`


/*
ANSWER CARD
----------------------------------------
*/

export const AnswerCardContainer = styled.div`
  assign-align: baseline;
  font-size: 14px;
  margin-top: 5px;
`
export const Answer = styled.div`
  justify-content: flex-start;
  margin-top: 15px;
  margin-bottom: 15px;
  assign-align: base-line;
`

export const AnswerInfo = styled.div`
  display: flex;

  justify-content: space-between;
`
export const AnswerStatus = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-evenly;
  margin-right: 3%;
  align-items: baseline;
`

export const ImageWrapper = styled.div`
  display: flex;
  width: 100px;
  justify-content: space-between;
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
`


/*
MODAL WINDOWS
--------------------------------------
*/

export const ModalContainer = styled.div`
  display: flex;
  width: 500px;
  height: 500px;
  background-color: black;
  opacity: .8;
  top: 50
  left: 50;
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



